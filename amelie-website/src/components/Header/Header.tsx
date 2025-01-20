import React from 'react';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


export default function Header(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <img src="assets/icons/AALogo.png" alt="AA initials logo" className={styles.logo} />
            <LanguageSwitcher />
        </div>
    );
}
