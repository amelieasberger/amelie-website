import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Contact.module.scss';
import { SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

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
                    <FiMail size="16px" />
                    amelie@asberger.dev
                </a>
                <a 
                    href="https://www.linkedin.com/in/amelie-asberger/" 
                    className={styles.button} 
                    target="_blank" rel="noopener noreferrer"
                >
                    <SiLinkedin size="16px" color='#0077b7' />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
