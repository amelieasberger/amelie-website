import { useTranslation } from 'react-i18next';
import styles from './Vita.module.scss';
import { vitaDataDE, vitaDataEN } from '@/data/vita';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useRef } from 'react';

  
export default function Vita(): React.JSX.Element {
    const { i18n, t } = useTranslation('common');
    const vitaData = i18n.language === 'en' ? vitaDataEN : vitaDataDE;
    const elementRef = useRef<HTMLDivElement>(null);
  
    return (
        <div className={styles.container}>
            <SectionTitle title={t('vitaTitle')} />
            <div className={styles.timeline} ref={elementRef}>
                {vitaData.map((vitaPoint) => {
                    return (
                        <div 
                            className={`${styles.event} ${styles.fadeInUp}`}
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
