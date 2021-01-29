import React from 'react'
import styles from '../styles/HomePageGrid.module.css'
import { Grid, Segment } from 'semantic-ui-react'


export default function HomePageGrid() {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <img alt="homepagegrid1" src="/homepagegrid1.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div2}>
                    <img alt="homepagegrid1" src="/homepagegrid2.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div3}>
                    <img alt="homepagegrid1" src="/kasiklar.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
            </div>
            <div className={styles.parent2}>
                <div className={styles.div4}>
                    <img alt="homepagegrid1" src="/beyaztorba.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div5}>
                    <img alt="homepagegrid1" src="/sariilac.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div6}>
                    <img alt="homepagegrid1" src="/kahve.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div7}>
                    <img alt="homepagegrid1" src="/bal.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div8}>
                    <img alt="homepagegrid1" src="/orgu.svg" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
            </div>

        </div>
    )

}

