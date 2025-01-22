'use client';
import '../../styles/reset.scss';
import '../../../i18n';
import { appWithTranslation } from 'next-i18next';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Privacy from '@/components/Privacy/Privacy';
import Introduction from '@/components/Introduction/Introduction';

function PrivacyPolicy(): React.JSX.Element {
  return (
    <div>
        <main>
            <Header />
            <Introduction />
            <Privacy />
            <Footer />
        </main>
    </div>
  );
};

export default appWithTranslation(PrivacyPolicy);
