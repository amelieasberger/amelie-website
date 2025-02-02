import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AboutMe.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MdOutlineColorLens } from 'react-icons/md';
import { RiCamera3Line } from 'react-icons/ri';
import { LuTicketsPlane } from 'react-icons/lu';
import { FaLaptopCode } from 'react-icons/fa';

function AboutMeDescription({ title, text, icon }: { title: string; text: string, icon: React.JSX.Element }): React.JSX.Element {
    
    return (
        <div className={styles.description}>
            <div className={styles.descriptionTitle}>
                <span className={styles.icon}>{icon}</span>
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
                                        <img className={styles.image} src={path} alt="photography taken by Amelie Asberger" />
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
                        icon={<FaLaptopCode size="24px" color="#252525" />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMeCreativityTitle')} 
                        text={t('aboutMeCreativityText')}
                        icon={<MdOutlineColorLens size="24px" color="#252525" />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMePhotoTitle')}
                        text={t('aboutMePhotoText')}
                        icon={<RiCamera3Line size="24px" color="#252525" />}
                    />
                    <AboutMeDescription 
                        title={t('aboutMeTravelTitle')} 
                        text={t('aboutMeTravelText')}
                        icon={<LuTicketsPlane size="24px" color="#252525" />}
                    />
               </div>
            </div>
        </div>
    );
}
