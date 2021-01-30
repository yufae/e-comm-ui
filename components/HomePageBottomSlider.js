import React from 'react'
import styles from '../styles/HomePageBottomSlider.module.css'
// import homePageTopSliderImg from "/homepagetopsliderImg.svg"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePageBottomSlider() {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={3}
                spaceBetween={35}
                className="homePageBottomSwiper"
                navigation
            >
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg.svg"
                                alt="homepagebottomsliderImg"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg2.svg"
                                alt="homepagebottomsliderImg2"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Sarı Mercimek</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg3.svg"
                                alt="homepagebottomsliderImg3"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Börülce</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg.svg"
                                alt="homepagebottomsliderImg"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg2.svg"
                                alt="homepagebottomsliderImg2"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                layout='fill'
                                src="/homepagebottomsliderImg3.svg"
                                alt="homepagebottomsliderImg3"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
