'use client';
import '../styles/reset.scss';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import Skills from '@/components/Skills/Skills';
import Vita from '@/components/Vita/Vita';
import Footer from '@/components/Footer/Footer';
import AboutMe from '@/components/AboutMe/AboutMe';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import Contact from '@/components/Contact/Contact';
import { useEffect } from 'react';

// to prevent ssr errors, the MobileFeedback component is only imported for mobile
const FeedbackBlock = dynamic(() => isMobile ? import('@/components/Feedback/MobileFeedback') : import('@/components/Feedback/Feedback'), { ssr: false });

function Home(): React.JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('%cHello fellow developer! 👋', 'color: #0070f3; font-size: 16px; font-weight: bold;');
      console.log('%cIf you’re interested in the code, check out my GitHub repository!', 'font-size: 14px; font-weight: bold;');
      console.log('%cGitHub: %chttps://github.com/amelieasberger','color: #333; font-size: 12px;', 
        'color: #0070f3; font-size: 12px; text-decoration: underline;'
      );
      console.log('%cOr drop me an email if you’d like to hire me! 📧', 'font-size: 14px; font-weight: bold;');
      console.log('%c╔════════════════════════════════════╗', 'color: #0070f3; font-size: 14px; font-weight: bold;');
      console.log('%c║          📧 Contact                ║', 'color: #0070f3; font-size: 14px; font-weight: bold;');
      console.log('%c╟────────────────────────────────────╢', 'color: #0070f3; font-size: 14px; font-weight: bold;');
      console.log('%c║   ✉️ amelie@asberger.dev           ║', 'color: #0070f3; font-size: 14px; font-weight: bold;');
      console.log('%c╚════════════════════════════════════╝', 'color: #0070f3; font-size: 14px; font-weight: bold;');
    }
  }, []);

  return (
    <div>
      <main>
        <Header />
        <Introduction />
        <Skills />
        <Vita />
        <FeedbackBlock />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default appWithTranslation(Home);