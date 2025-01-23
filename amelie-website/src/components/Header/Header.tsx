import React from 'react';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import Image from 'next/image';

export default function Header(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <Link className={styles.logoContainer} href="/">
                <Image src="assets/icons/AALogo.png" alt="AA initials logo" className={styles.logo} />
                <p className={styles.name}>Amelie Asberger</p>
            </Link>
            <LanguageSwitcher />
        </div>
    );
}
