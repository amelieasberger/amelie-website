'use client';
import '../styles/reset.scss';
import NotFoundMessage from '@/components/NotFoundMessage/NotFoundMessage';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';

function NotFound() {
  return <NotFoundMessage />
}

export default appWithTranslation(NotFound);