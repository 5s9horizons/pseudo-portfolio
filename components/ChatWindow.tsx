
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { PRIMARY_GREEN } from '../constants';
import PaperAirplaneIcon from './icons/PaperAirplaneIcon';
import CloseIcon from './icons/CloseIcon';
import LogoIcon from './icons/LogoIcon';


interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  onClose: () => void;
  title: string;
  error?: string | null;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading, onSendMessage, onClose, title, error }) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentError, setCurrentError] = useState(error);

  useEffect(() => {
    setCurrentError(error);
  }, [error]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (currentError) { // Clear error display if user starts typing
      setCurrentError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !currentError) { // Also check for currentError
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };

  return (
    <div className="fixed bottom-[calc(4.5rem+1.25rem)] right-5 w-[calc(100%-2.5rem)] max-w-md h-[70vh] max-h-[600px] bg-gray-900 rounded-xl shadow-2xl flex flex-col border border-gray-700/50 z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center">
            <LogoIcon className="h-7 w-7 mr-2" color={PRIMARY_GREEN} />
            <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        </div>
        <button
          onClick={onClose}
          title="Close chat"
          aria-label="Close chat"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#00FF88] scrollbar-track-gray-800">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg shadow ${
                msg.sender === 'user' 
                  ? 'bg-[#00FF88] text-gray-900 rounded-br-none' 
                  : 'bg-gray-700 text-gray-200 rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg shadow bg-gray-700 text-gray-200 rounded-bl-none">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}
        {currentError && messages.length === 0 && ( // Display error prominently if no other messages and error exists
            <div className="flex justify-center items-center h-full">
             <div className="max-w-[90%] p-4 rounded-lg shadow bg-red-800/60 text-red-100 text-center">
                <p className="text-sm font-medium">Chatbot Error:</p>
                <p className="text-xs mt-1">{currentError}</p>
             </div>
            </div>
        )}
         {currentError && messages.length > 0 && ( // Display error more subtly if messages already exist
            <div className="flex justify-start">
             <div className="max-w-[80%] p-3 rounded-lg shadow bg-red-700/50 text-red-100 rounded-bl-none">
                <p className="text-sm">{currentError}</p>
             </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder={currentError ? "Chat unavailable" : "Ask something..."}
            aria-label="Chat message input"
            className="flex-grow px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88] text-gray-100 placeholder-gray-400 transition-colors duration-200 outline-none text-sm"
            disabled={isLoading || !!currentError}
          />
          <button
            type="submit"
            title="Send message"
            aria-label="Send message"
            disabled={isLoading || !inputText.trim() || !!currentError}
            className="p-2.5 rounded-lg bg-[#00FF88] text-gray-900 hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#00FF88] focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
