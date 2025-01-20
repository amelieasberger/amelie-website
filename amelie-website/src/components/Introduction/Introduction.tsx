import React from 'react';
import styles from './Introduction.module.scss';
import { useTranslation } from 'react-i18next';


export default function Introduction(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="assets/images/portrait.jpg" alt="image of Amelie" className={styles.image} />
                <h1 className={styles.title}>{t('welcome')}</h1>
            </div>
        </div>
    );
}
