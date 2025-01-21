import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AboutMe.module.scss';

export default function AboutMe(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <SectionTitle title={t('aboutMeTitle')} />
            <div className={styles.content}>
               
            </div>
        </div>
    );
}
