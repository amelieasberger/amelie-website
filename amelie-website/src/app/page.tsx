'use client';
import Header from '@/components/Header/Header';
import Introduction from '@/components/Introduction/Introduction';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';

function Home(): React.JSX.Element {
  return (
    <div>
      <main>
        <Header />
        <Introduction />
      </main>
    </div>
  );
}


export default appWithTranslation(Home);