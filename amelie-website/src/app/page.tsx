'use client';
import '../styles/reset.scss';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import Skills from '@/components/Skills/Skills';
import QuoteSection from '@/components/QuoteSection/QuoteSection';
import Vita from '@/components/Vita/Vita';
import Imprint from '@/components/Footer/Imprint/Imprint';

function Home(): React.JSX.Element {
  return (
    <div>
      <main>
        <Header />
        <Introduction />
        <Skills />
        {/* <QuoteSection /> */}
        <Vita />
        <Imprint />
      </main>
    </div>
  );
}


export default appWithTranslation(Home);