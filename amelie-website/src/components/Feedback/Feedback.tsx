import { useTranslation } from 'react-i18next';
import styles from './Feedback.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import WomanIcon from '../Icons/WomanIcon';
import ManIcon from '../Icons/ManIcon';

function FeedbackTile({ isFemale, name, link, feedbackText }: { isFemale: boolean; name: string; link: string; feedbackText: string }): React.JSX.Element {
    return (
        <div className={styles.feedback}>
            <div className={styles.name}>
                <div className={styles.icon}>{isFemale ? <WomanIcon /> : <ManIcon />}</div>
                <span>{name}</span>
                <a href={link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            {feedbackText}
        </div>
    );
}

export default function Feedback(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <SectionTitle title={t('feedbackTitle')} />
            <div className={styles.content}>
                    <FeedbackTile
                        isFemale={true}
                        name="Patricia W. – Professional Product Manager"
                        link="https://www.linkedin.com/in/patricia-wagner-b6b9b5195/"
                        feedbackText={t('feedbackPatricia')}
                    />
                    <FeedbackTile
                        isFemale={false}
                        name="Sebastian A. – ehem. stellv. Teamleiter Softwareentwicklung"
                        link="https://www.linkedin.com/in/sebastian-antosch/"
                        feedbackText={t('feedbackPatricia')}
                    />
                    <FeedbackTile
                        isFemale={false}
                        name="Moritz D. – Professional Product Manager"
                        link="https://www.linkedin.com/in/moritz-dressler/"
                        feedbackText={t('feedbackMoritz')}
                    />
            </div>
        </div>
    );
}
