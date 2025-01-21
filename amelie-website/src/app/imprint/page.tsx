'use client';
import '../../styles/reset.scss';
import '../../../i18n';
import { appWithTranslation } from 'next-i18next';
import React from 'react';
import Imprint from '@/components/Footer/Imprint/Imprint';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Introduction from '@/components/Introduction/Introduction';

function ImprintPage(): React.JSX.Element {
  return (
    <div>
        <main>
            <Header />
            <Introduction />
            <Imprint />
            <Footer />
        </main>
    </div>
  );
};

export default appWithTranslation(ImprintPage);
