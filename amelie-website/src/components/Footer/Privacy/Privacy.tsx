import { useTranslation } from 'react-i18next';
import styles from './Privacy.module.scss';

export default function Privacy(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <h1>{t('privacyTitle')}</h1>
            <div>
                <p className={styles.subtitle}>{t('privacyResponsibility')}</p>
                <p className={styles.personalData}>
                    <span>Amelie Asberger</span>
                    <span>Augsburger Str. 3b</span>
                    <span>86368 Gersthofen</span>
                    <span>{t('country')}</span>
                </p>
                <p>{t('contact')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('personalData')}</p>
                <p>{t('personalDataText')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('cookies')}</p>
                <p>{t('cookieText')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('dataTransfer')}</p>
                <p>{t('dataTransferText')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('rights')}</p>
                <p>{t('rightsText')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('privacyChanges')}</p>
                <p>{t('privacyChangesText')}</p>
            </div>
        </div>
    );
};
