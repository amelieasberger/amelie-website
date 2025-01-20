'use client';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import Skills from '@/components/Skills/Skills';
import QuoteSection from '@/components/QuoteSection/QuoteSection';

function Home(): React.JSX.Element {
  return (
    <div>
      <main>
        <Header />
        <Introduction />
        <Skills />
        <QuoteSection />
      </main>
      <div className='h-20'></div>
    </div>
  );
}


export default appWithTranslation(Home);