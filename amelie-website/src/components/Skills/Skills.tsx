import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { frontendSkills, backendSkills, toolSkills } from '@/data/skills';
import PieSkillChart from '../PieSkillChart/PieSkillChart';

export default function Skills(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t('skillsTitle')}</h2>
            <div className={styles.skillContainer}>
                <div>
                    <span className={styles.skillTitle}>Frontend</span>
                    <div className={styles.chartContainer}>
                        <PieSkillChart data={frontendSkills} />
                    </div>
                </div>
                <div>
                    <span className={styles.skillTitle}>Backend</span>
                    <div className={styles.chartContainer}>
                        <PieSkillChart data={backendSkills} />
                    </div>
                </div>
                <div>
                    <span className={styles.skillTitle}>Tools</span>
                    <div className={styles.chartContainer}>
                        <PieSkillChart data={toolSkills} />
                    </div>
                </div>
            </div>
        </div>
    );
}
