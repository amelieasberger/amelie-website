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

// to prevent ssr errors, the MobileFeedback component is only imported for mobile
const FeedbackBlock = dynamic(() => isMobile ? import('@/components/Feedback/MobileFeedback') : import('@/components/Feedback/Feedback'), { ssr: false });

function Home(): React.JSX.Element {
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