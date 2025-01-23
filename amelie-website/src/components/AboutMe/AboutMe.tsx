import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AboutMe.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TravelIcon from '../Icons/TravelIcon';
import CameraIcon from '../Icons/CameraIcon';
import PaintIcon from '../Icons/PaintIcon';
import LaptopIcon from '../Icons/LaptopIcon';
import Image from 'next/image';

function AboutMeDescription({ title, text, icon }: { title: string; text: string, icon: React.JSX.Element }): React.JSX.Element {
    
    return (
        <div className={styles.description}>
            <div className={styles.descriptionTitle}>
                {icon}
                {title}
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default function AboutMe(): React.JSX.Element {
    const { t } = useTranslation('common');
    const photographyList = [
        'assets/images/water.jpg',
        'assets/images/italy.png',
        'assets/images/cat.jpg',
    ];

    return (
        <div className={styles.container}>
            <SectionTitle title={t('aboutMeTitle')} />
            <div className={styles.content}>
               <div className={styles.photographyContainer}>
                    <Swiper
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={true}
                    >
                        {photographyList.map((path) => {
                            return (
                                <SwiperSlide key={path} className={styles.swiperSlide}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.image} src={path} alt="photography taken by Amelie Asberger" />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
               </div>
               <div className={styles.descriptionContainer}>
                    <AboutMeDescription 
                        title={t('aboutMeProgrammingTitle')} 
                        text={t('aboutMeProgrammingText')}
                        icon={<LaptopIcon />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMeCreativityTitle')} 
                        text={t('aboutMeCreativityText')}
                        icon={<PaintIcon />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMePhotoTitle')}
                        text={t('aboutMePhotoText')}
                        icon={<CameraIcon />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMeTravelTitle')} 
                        text={t('aboutMeTravelText')}
                        icon={<TravelIcon />}
                    />
               </div>
            </div>
        </div>
    );
}
