import React from 'react';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';

export default function Header(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <Link className={styles.logoContainer} href="/">
                <img src="assets/icons/AALogo.png" alt="AA initials logo" className={styles.logo} />
                <p className={styles.name}>Amelie Asberger</p>
            </Link>
            <LanguageSwitcher />
        </div>
    );
}
