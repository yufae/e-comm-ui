import styles from '../styles/HomePageBottomBanner.module.css'
import Image from 'next/image'

export default function HomePageBottomBanner() {
    return (
        <div className={styles.HomePageBottomBanner}>
            <div className={styles.banner1}>
                <div className={styles.banner1Texts}>
                    <p className={styles.banner1Title}>Lorem İpsum</p>
                    <p className={styles.banner1Desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <button className={styles.banner1Btn}><p>TÜMÜNÜ GÖR</p></button>
                </div>
                <Image width={600} height={500} src="/homepagebanner1Img.svg" alt="homepagebanner1Img" />
            </div>

            <div className={styles.banner2}>
                <div className={styles.banner2Texts}>
                    <p className={styles.banner2DiscountNumber}>%10</p>
                    <p className={styles.banner2Discount}>İndirimli</p>
                    <p className={styles.banner2Product}>Tarhana</p>
                </div>
                <Image width={1200} height={300} src="/homepagebanner2Img.svg" alt="homepagebanner2Img" />
            </div>
            <div className={styles.banner2}>
                <div className={styles.banner2Texts}>
                    {/* <p className={styles.banner2DiscountNumber}></p> */}
                    <p className={styles.banner2Discount}>Lorem</p>
                    <p className={styles.banner2Product}>Ipsum</p>
                </div>
                <Image width={1200} height={300} src="/homepagebanner3Img.svg" alt="homepagebanner3Img" />
            </div>
            <div className={styles.banner2}>
                <div className={styles.banner2Texts}>
                    <p className={styles.banner2DiscountNumber}>%10</p>
                    <p className={styles.banner2Discount}>İndirimli</p>
                    <p className={styles.banner2Product}>Tarhana</p>
                </div>
                <Image width={1200} height={300} src="/homepagebanner2Img.svg" alt="homepagebanner2Img" />
            </div>
            <div className={styles.banner2}>
                <div className={styles.banner2Texts}>
                    {/* <p className={styles.banner2DiscountNumber}></p> */}
                    <p className={styles.banner2Discount}>Lorem</p>
                    <p className={styles.banner2Product}>Ipsum</p>
                </div>
                <Image width={1200} height={300} src="/homepagebanner3Img.svg" alt="homepagebanner3Img" />
            </div>

        </div>
    )

}

