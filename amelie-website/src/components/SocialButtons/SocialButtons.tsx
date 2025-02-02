import React from 'react';
import styles from './SocialButtons.module.scss';
import { DiGithubBadge  } from 'react-icons/di';
import { SiLinkedin } from 'react-icons/si';

export default function SocialButtons(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <a 
                href="https://github.com/amelieasberger" 
                target="_blank" rel="noopener noreferrer"
                className={styles.button}
            >
                <DiGithubBadge size="30px" color='#171717' />
                GitHub
            </a>
            <a 
                href="https://www.linkedin.com/in/amelie-asberger/" 
                target="_blank" rel="noopener noreferrer"
                className={styles.button}
            >
                <SiLinkedin size="20px" color='#171717' />
                LinkedIn
            </a>
        </div>
    );
}
