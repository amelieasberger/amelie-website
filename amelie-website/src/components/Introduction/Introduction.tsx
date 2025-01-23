import React from 'react';
import styles from './Introduction.module.scss';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Introduction(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <div>
                <Image src="assets/images/portrait.jpg" alt="image of Amelie" className={styles.image} />
            </div>
            <div>
                <p className={styles.description}>{t('welcome')}</p>
                <h1 className={styles.title}>Amelie Asberger</h1>
                <p className={styles.description}>{t('description')}</p>
            </div>
        </div>
    );
}
