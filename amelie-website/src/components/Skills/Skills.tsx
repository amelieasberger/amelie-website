import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { frontendSkills, backendSkills, toolSkills } from '@/data/skills';

export default function Skills(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div>
            <h2 className={styles.title}>{t('skillsTitle')}</h2>
            <div>
                Frontend
            </div>
            <div>
                Backend
            </div>
            <div>
                Tools
            </div>
        </div>
    );
}
