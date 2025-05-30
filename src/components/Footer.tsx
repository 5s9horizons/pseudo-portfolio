import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import XIcon from './icons/XIcon';
import EmailIcon from './icons/EmailIcon';
import InstagramIcon from './icons/InstagramIcon';
import YouTubeIcon from './icons/YouTubeIcon';
import MediumIcon from './icons/MediumIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import BlueskyIcon from './icons/BlueskyIcon';
import MastodonIcon from './icons/MastodonIcon';
import TelegramIcon from './icons/TelegramIcon';
import DiscordIcon from './icons/DiscordIcon';
import GoogleChatIcon from './icons/GoogleChatIcon';
import ThreadsIcon from './icons/ThreadsIcon';
import SignalIcon from './icons/SignalIcon';
import TikTokIcon from './icons/TikTokIcon';
import PatreonIcon from './icons/PatreonIcon';

const Footer: React.FC = () => {
  const iconClass = "h-6 w-6 text-gray-400 group-hover:text-[#00FF88] transition-colors duration-200";

  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-5 mb-4 flex-wrap">
          {SOCIAL_LINKS.github && (
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group p-1">
              <GitHubIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.linkedin && (
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group p-1">
              <LinkedInIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.twitter && (
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="group p-1">
              <XIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.instagram && (
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group p-1">
              <InstagramIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.youtube && (
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group p-1">
              <YouTubeIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.medium && (
            <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="group p-1">
              <MediumIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.threads && (
            <a href={SOCIAL_LINKS.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="group p-1">
              <ThreadsIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.bluesky && (
            <a href={SOCIAL_LINKS.bluesky} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="group p-1">
              <BlueskyIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.mastodon && (
            <a href={SOCIAL_LINKS.mastodon} target="_blank" rel="noopener noreferrer" aria-label="Mastodon" className="group p-1">
              <MastodonIcon className={iconClass} />
            </a>
          )}
           {SOCIAL_LINKS.discord && (
            <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="group p-1">
              <DiscordIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.telegram && (
            <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="group p-1">
              <TelegramIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.whatsapp && (
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="group p-1">
              <WhatsAppIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.signal && (
            <a href={SOCIAL_LINKS.signal} target="_blank" rel="noopener noreferrer" aria-label="Signal" className="group p-1">
              <SignalIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.googlechat && (
            <a href={SOCIAL_LINKS.googlechat} target="_blank" rel="noopener noreferrer" aria-label="Google Chat" className="group p-1">
              <GoogleChatIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.tiktok && (
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group p-1">
              <TikTokIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.patreon && (
            <a href={SOCIAL_LINKS.patreon} target="_blank" rel="noopener noreferrer" aria-label="Patreon" className="group p-1">
              <PatreonIcon className={iconClass} />
            </a>
          )}
          {SOCIAL_LINKS.email && (
            <a href={SOCIAL_LINKS.email} aria-label="Email" className="group p-1">
              <EmailIcon className={iconClass} />
            </a>
          )}
        </div>
        
        <div className="my-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-[#00FF88] transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-xs text-gray-500">|</span>
          <Link to="/terms-of-service" className="text-xs text-gray-400 hover:text-[#00FF88] transition-colors">
            Terms of Service
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pseudo Line. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Tools that teach. Systems that think. Art that moves.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Designed & Developed by Pseudo Line.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
