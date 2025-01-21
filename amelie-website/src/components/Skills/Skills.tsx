import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { advancedSkills, mediumSkills, lowSkills, advancedToolSkills, mediumToolSkills } from '@/data/skills';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Skills(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <div>
                <SectionTitle title={t('skillsTitle')} additionalClasses={styles.title} />
                <div className={styles.chartContainer}>
                    {advancedSkills.map((frontendSkill) => {
                        return (
                            <div key={frontendSkill} className={styles.advanced}>{frontendSkill}</div>
                        );
                    })}
                </div>
                <div className={styles.chartContainer}>
                    {mediumSkills.map((frontendSkill) => {
                        return (
                            <div key={frontendSkill} className={styles.medium}>{frontendSkill}</div>
                        );
                    })}
                </div>
                <div className={styles.chartContainer}>
                    {lowSkills.map((frontendSkill) => {
                        return (
                            <div key={frontendSkill} className={styles.low}>{frontendSkill}</div>
                        );
                    })}
                </div>
            </div>
            <div>
                <SectionTitle title={t('toolsTitle')} additionalClasses={styles.title} />
                <div className={styles.chartContainer}>
                    {advancedToolSkills.map((frontendSkill) => {
                        return (
                            <div key={frontendSkill} className={styles.advanced}>{frontendSkill}</div>
                        );
                    })}
                </div>
                <div className={styles.chartContainer}>
                    {mediumToolSkills.map((frontendSkill) => {
                        return (
                            <div key={frontendSkill} className={styles.medium}>{frontendSkill}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
