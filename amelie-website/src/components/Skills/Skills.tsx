import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { advancedSkills, mediumSkills, lowSkills, advancedToolSkills, mediumToolSkills, lowToolSkills } from '@/data/skills';
import SectionTitle from '../SectionTitle/SectionTitle';

function Skill({ skills, style }: { skills: Array<string>; style: string }): React.JSX.Element {
    return (
        <div className={styles.skillContainer}>
            {skills.map((skill) => {
                return (
                    <div key={skill} className={style}>{skill}</div>
                );
            })}
        </div>
    );
}

export default function Skills(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <div>
                <SectionTitle title={t('skillsTitle')} additionalClasses={styles.title} />
                <Skill skills={advancedSkills} style={styles.advanced} />
                <Skill skills={mediumSkills} style={styles.medium} />
                <Skill skills={lowSkills} style={styles.low} />
            </div>
            <div>
                <SectionTitle title={t('toolsTitle')} additionalClasses={styles.title} />
                <Skill skills={advancedToolSkills} style={styles.advanced} />
                <Skill skills={mediumToolSkills} style={styles.medium} />
                <Skill skills={lowToolSkills} style={styles.low} />
            </div>
        </div>
    );
}
