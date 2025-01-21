import { useTranslation } from 'react-i18next';
import styles from './Vita.module.scss';
import { vitaDataDE, vitaDataEN } from '@/data/vita';
import SectionTitle from '../SectionTitle/SectionTitle';

  
export default function Vita(): React.JSX.Element {
    const { i18n, t } = useTranslation('common');
    const vitaData = i18n.language === 'en' ? vitaDataEN : vitaDataDE;

    return (
        <div className={styles.container}>
            <SectionTitle title={t('vitaTitle')} />
            <div className={styles.timeline}>
                {vitaData.map((vitaPoint, index) => {
                    let eventTypeStyles = '';

                    if (index === 1 || index === 4) {
                        eventTypeStyles = styles.type2;
                    } 
                    
                    if (index === 2) {
                        eventTypeStyles = styles.type3;
                    }
                        
                    if (index === 3) {
                        eventTypeStyles = '';
                    }
                    
                    return (
                        <div 
                            className={`${styles.event} ${styles.animated} ${styles.fadeInUp} ${eventTypeStyles}`}
                            key={vitaPoint.title}
                        >
                            <div className={styles.icon}>
                            </div>
                            <p className={styles.date}>{vitaPoint.date}</p>
                            <div className={styles.content}>
                                <p className={styles.title}>{vitaPoint.title}</p>
                                <p className={styles.description}>{vitaPoint.company}</p>
                                  {vitaPoint.description.length > 0 && (
                                    <ul className={styles.bulletPointContainer}>
                                        {vitaPoint.description.map((bulletPoint, idx) => {
                                            return <li key={`${vitaPoint.title}_bullet_${idx}`}>{bulletPoint}</li>;
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
}
