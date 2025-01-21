import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { frontendSkills, backendSkills, toolSkills } from '@/data/skills';
import PieSkillChart from './PieSkillChart/PieSkillChart';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Skills(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <SectionTitle title={t('skillsTitle')} />
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
