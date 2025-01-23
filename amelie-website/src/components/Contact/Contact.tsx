import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Contact.module.scss';

export default function Contact(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <SectionTitle title="Let's Connect!" />
            <p className={styles.contactText}>
                {t('contactText')}
                <br></br>
                <br></br>
                {t('contactSubtext')}
            </p>
            <div className={styles.buttonContainer}>
                <a href="mailto:amelie@asberger.dev" className={styles.button}>
                    💌 amelie@asberger.dev
                </a>
                <a 
                    href="https://www.linkedin.com/in/amelie-asberger/" 
                    className={`${styles.button} ${styles.linkedInButton}`} 
                    target="_blank" rel="noopener noreferrer"
                >
                    <img src="assets/images/linkedin.png" alt="LinkedIn Logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
