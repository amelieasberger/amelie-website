import React from 'react';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({ title, additionalClasses }: { title: string, additionalClasses?: string }): React.JSX.Element {
    return <h2 className={`${additionalClasses} ${styles.sectionTitle}`}>{title}</h2>;
}
