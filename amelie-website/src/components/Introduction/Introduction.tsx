import React from 'react';
import styles from './Introduction.module.scss';


export default function Introduction(): React.JSX.Element {

    return (
        <div className={styles.container}>
            <div>
                <img src="assets/images/portrait.jpg" alt="image of Amelie" className={styles.image} />
                <div>
                    Hallo!
                </div>
            </div>
        </div>
    );
}
