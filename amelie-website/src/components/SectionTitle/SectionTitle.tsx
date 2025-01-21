import React from 'react';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({ title }: { title: string}): React.JSX.Element {

    return <h2 className={styles.sectionTitle}>{title}</h2>;
}
