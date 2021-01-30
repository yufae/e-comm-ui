import React from 'react'
import styles from '../styles/HomePageTopSlider.module.css'
import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePageTopSlider() {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={1}
                className="homePageTopSwiper"
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout="fill"
                                src="/homepagetopsliderImg.svg"
                                alt="homepagetopsliderImg"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout="fill"
                                src="/homepagetopsliderImg.svg"
                                alt="homepagetopsliderImg"

                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout="fill"
                                src="/homepagetopsliderImg.svg"
                                alt="homepagetopsliderImg"

                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout="fill"
                                src="/homepagetopsliderImg.svg"
                                alt="homepagetopsliderImg"

                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
