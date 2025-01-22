import { useTranslation } from 'react-i18next';
import styles from './Feedback.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { feedbacks } from '@/data/feedbacks';
import { FeedbackTile } from './Feedback';

export default function MobileFeedback(): React.JSX.Element {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <SectionTitle title={t('feedbackTitle')} />
            <div className={styles.mobileContent}>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={true}
                    spaceBetween="10px"
                    className={styles.swiperContainer}
                >
                    {feedbacks.map((feedback) => {
                        return (
                            <SwiperSlide key={feedback.token}>
                                <FeedbackTile
                                    isFemale={feedback.female}
                                    name={feedback.name}
                                    link={feedback.link}
                                    feedbackText={t(feedback.token)}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
