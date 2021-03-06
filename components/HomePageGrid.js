import styles from '../styles/HomePageGrid.module.css'
import Image from 'next/image'

export default function HomePageGrid() {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/homepagegrid1.svg" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div2}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/homepagegrid2.svg" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div3}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/kasiklar.svg" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
            </div>
            <div className={styles.parent2}>
                <div className={styles.div4}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/beyaztorba.svg" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div5}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/sariilac.svg" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div6}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/kahve.svg" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div7}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/bal.svg" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div8}>
                    <Image loading='eager' layout='fill' alt="homepagegrid1" src="/orgu.svg" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
            </div>

        </div>
    )

}

