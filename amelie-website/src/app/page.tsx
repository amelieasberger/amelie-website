'use client';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import Skills from '@/components/Skills/Skills';

function Home(): React.JSX.Element {
  return (
    <div>
      <main>
        <Header />
        <Introduction />
        <Skills />
      </main>
    </div>
  );
}


export default appWithTranslation(Home);