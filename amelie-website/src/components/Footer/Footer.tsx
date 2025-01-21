import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export default function Footer(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <Link href="/imprint">{t('imprintTitle')}</Link>
            <Link href="/privacyPolicy">{t('privacy')}</Link>
            <Link href="/">Home</Link>
        </div>
    );
};
