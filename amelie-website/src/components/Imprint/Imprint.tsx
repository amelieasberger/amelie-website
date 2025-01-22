import { useTranslation } from 'react-i18next';
import styles from './Imprint.module.scss';

export default function Imprint(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <h1>{t('imprintTitle')}</h1>
            <div>
                <p className={styles.subtitle}>{t('imprintSubtitle')}</p>
                <p className={styles.personalData}>
                    <span>Amelie Asberger</span>
                    <span>Augsburger Str. 3b</span>
                    <span>86368 Gersthofen</span>
                    <span>{t('country')}</span>
                </p>
                <p>{t('contact')}</p>
            </div>
            <div>
                <p className={styles.subtitle}>{t('responsibilityTitle')}</p>
                <p className={styles.personalData}>
                    <span>Amelie Asberger</span>
                    <span>Augsburger Str. 3b</span>
                    <span>86368 Gersthofen</span>
                    <span>{t('country')}</span>
                </p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>{t('copyright')}</p>
                <p>{t('copyrightText')}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>{t('liabilityContent')}</p>
                <p>{t('liabilityContentText')}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>{t('liabilityLinks')}</p>
                <p>{t('liabilityLinksText')}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>{t('sources')}</p>
                <ul className={styles.sourceList}>
                    <li>
                        {t('iconSource')}
                        <a 
                            href="https://www.svgrepo.com/page/licensing/#CC%20Attribution" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            svgrepo.com
                        </a>
                    </li>
                    <li>
                        {t('linkedInIconSource')}
                        <a 
                            href="https://www.flaticon.com/free-icons/linkedin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Linkedin icons created by Freepik - Flaticon
                        </a>
                    </li>
                    <li>{t('logoSource')}</li>
                    <li>{t('imageSource')}</li>
                </ul>
            </div>
        </div>
    );
};
