'use client';
import '../styles/reset.scss';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import Skills from '@/components/Skills/Skills';
import Vita from '@/components/Vita/Vita';
import Footer from '@/components/Footer/Footer';
import Feedback from '@/components/Feedback/Feedback';
import AboutMe from '@/components/AboutMe/AboutMe';

function Home(): React.JSX.Element {
  return (
    <div>
      <main>
        <Header />
        <Introduction />
        <Skills />
        <Vita />
        <Feedback />
        <AboutMe />
        <Footer />
      </main>
    </div>
  );
}

export default appWithTranslation(Home);