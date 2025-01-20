import React from 'react';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


export default function Header(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="assets/icons/AALogo.png" alt="AA initials logo" className={styles.logo} />
                <p className={styles.name}>Amelie Asberger</p>
            </div>
            <LanguageSwitcher />
        </div>
    );
}
