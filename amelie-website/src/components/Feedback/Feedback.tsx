import { useTranslation } from 'react-i18next';
import styles from './Feedback.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import WomanIcon from '../Icons/WomanIcon';
import ManIcon from '../Icons/ManIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import SliderNavigation from './SliderNavigation/SliderNavigation';
import { useState } from 'react';
import { feedbacks } from '@/data/feedbacks';
import { SiLinkedin } from 'react-icons/si';

export function FeedbackTile({ isFemale, name, link, feedbackText }: { isFemale?: boolean; name: string; link: string; feedbackText: string }): React.JSX.Element {
    return (
        <div className={styles.feedbackPanel}>
            <div className={styles.feedback}>
                <div className={styles.name}>
                    <div className={styles.icon}>{isFemale ? <WomanIcon /> : <ManIcon />}</div>
                    <div className={styles.nameContainer}>
                        <span>{name}</span>
                        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <SiLinkedin size="30px" color='#0077b7' />
                        </a>
                    </div>
                </div>
                {feedbackText}
            </div>
        </div>
    );
}

export default function Feedback(): React.JSX.Element {
    const { i18n, t } = useTranslation('common');
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const prevButtonClass = 'swiper-prev-button';
    const nextButtonClass = 'swiper-next-button';

    const handleSlideChange = (event: { activeIndex: number }): void => {
        setCurrentSlide(event.activeIndex);
    };

    return (
        <div className={styles.container}>
            <SectionTitle title={t('feedbackTitle')} />
            <div className={styles.content}>
                <Swiper
                    slidesPerView={2}
                    modules={[Navigation]}
                    spaceBetween="10px"
                    className={styles.swiperContainer}
                    navigation={{
                        nextEl: `.${nextButtonClass}`,
                        prevEl: `.${prevButtonClass}`,
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {feedbacks.map((feedback) => {
                        const nameText = i18n.language === 'en' && feedback.nameEn ? feedback.nameEn : feedback.name;

                        return (
                            <SwiperSlide key={feedback.token}>
                                <FeedbackTile
                                    isFemale={feedback.female}
                                    name={nameText}
                                    link={feedback.link}
                                    feedbackText={t(feedback.token)}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <SliderNavigation
                    products={4}
                    currentSlide={currentSlide} 
                    prevButtonClass={prevButtonClass} 
                    nextButtonClass={nextButtonClass} 
                />
            </div>
        </div>
    );
}
