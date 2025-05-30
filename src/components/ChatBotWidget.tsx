import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { projects } from '../data/projectsData';
import { pricingPlans } from '../data/pricingData';
import { 
  CHATBOT_SYSTEM_INSTRUCTION_BASE, 
  CHATBOT_PROJECTS_CONTEXT_HEADER, 
  CHATBOT_PRICING_CONTEXT_HEADER,
  CHATBOT_SUFFIX_INSTRUCTION,
  CHATBOT_INITIAL_MESSAGE,
  CHATBOT_NAME
} from '../constants';
import type { ChatMessage } from '../types';
import ChatWindow from './ChatWindow';
import ChatBubbleIcon from './icons/ChatBubbleIcon';

// API_KEY is injected by Vite's `define` config from vite.config.ts
// and should resolve to the value of process.env.API_KEY during build/dev.
const API_KEY = process.env.API_KEY!;


const ChatBotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    if (!API_KEY) {
      console.error("Gemini API Key is missing. Chatbot will not function.");
      if (isMounted.current) setError("Chatbot is currently unavailable due to a configuration issue.");
      return; 
    }

    const initializeChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        
        const projectSummaries = projects.map(p => `- ${p.name}: ${p.description.substring(0, 150)}... Stack: ${p.stack.slice(0,3).join(', ')}`).join('\n');
        const pricingSummaries = pricingPlans.map(p => `- ${p.name} (${p.price}): ${p.description.substring(0, 100)}... Features: ${p.features.slice(0, 2).join(', ')}`).join('\n');
        
        const systemInstruction = `${CHATBOT_SYSTEM_INSTRUCTION_BASE}${CHATBOT_PROJECTS_CONTEXT_HEADER}\n${projectSummaries}\n${CHATBOT_PRICING_CONTEXT_HEADER}\n${pricingSummaries}\n${CHATBOT_SUFFIX_INSTRUCTION}`;

        const newChatInstance = ai.chats.create({
          model: 'gemini-2.5-flash-preview-04-17',
          config: {
            systemInstruction: systemInstruction,
          }
        });
        
        if (isMounted.current) {
          setChat(newChatInstance);
          setMessages([{ id: Date.now().toString(), text: CHATBOT_INITIAL_MESSAGE, sender: 'bot', timestamp: Date.now() }]);
          setError(null); 
        }

      } catch (e) {
        console.error("Failed to initialize Gemini AI:", e);
        let initErrorMessage = "Chatbot failed to initialize.";
        if (e instanceof Error) {
           initErrorMessage = `Chatbot initialization error: ${e.message}`;
        }
        if (isMounted.current) setError(initErrorMessage);
      }
    };

    initializeChat();

    return () => {
      isMounted.current = false;
    };
  }, []); 

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (text: string) => {
    if (!chat || isLoading || !text.trim() || error) return; 

    const userMessage: ChatMessage = { id: Date.now().toString(), text, sender: 'user', timestamp: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await chat.sendMessage({ message: text });
      if (isMounted.current) {
        const botMessage: ChatMessage = { id: (Date.now() + 1).toString(), text: response.text, sender: 'bot', timestamp: Date.now() };
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (e) {
      console.error("Error sending message to Gemini:", e);
      let errorMessageText = "Sorry, I encountered an error. Please try again.";
      if (e instanceof Error) {
        errorMessageText = `Error: ${e.message}. Please try again.`;
      }
      if (isMounted.current) {
        const botError: ChatMessage = { id: (Date.now() + 1).toString(), text: errorMessageText, sender: 'bot', timestamp: Date.now() };
        setMessages(prev => [...prev, botError]);
      }
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };
  
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleChat}
          title={error ? "Chatbot unavailable" : CHATBOT_NAME}
          aria-label="Toggle Chat"
          className={`p-4 text-gray-900 rounded-full shadow-2xl hover:bg-opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 ${
            error ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500 cursor-not-allowed' : 'bg-[#00FF88] focus:ring-[#00FF88]'
          }`}
          disabled={!!error && !isOpen} 
        >
          <ChatBubbleIcon className="w-7 h-7" />
        </button>
      </div>
      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          onSendMessage={sendMessage}
          onClose={toggleChat}
          title={CHATBOT_NAME}
          error={error} 
        />
      )}
    </>
  );
};

export default ChatBotWidget;
