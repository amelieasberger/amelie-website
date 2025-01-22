import React from 'react';
import LeftArrow from '@/components/Icons/LeftArrow';
import RightArrow from '@/components/Icons/RightArrow';
import styles from './SliderNavigation.module.scss';

export default function SliderNavigation({
    products, 
    currentSlide,
    prevButtonClass,
    nextButtonClass
}: {
    products: number, 
    currentSlide: number,
    prevButtonClass?: string,
    nextButtonClass?: string
}): React.JSX.Element {
    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = currentSlide === products / 2;

    return (
        <>
            <button disabled={isPrevButtonDisabled} className={`${prevButtonClass} ${styles.button} ${styles.prevButton}`}>
                <LeftArrow isDisabled={isPrevButtonDisabled} />
            </button>
            <button disabled={isNextButtonDisabled} className={`${nextButtonClass} ${styles.button} ${styles.nextButton}`}>
                <RightArrow isDisabled={isNextButtonDisabled} />
            </button>
        </>
    );
};

SliderNavigation.displayName = 'SliderNavigation';