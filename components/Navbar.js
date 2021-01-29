import React from 'react'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Popup } from 'semantic-ui-react'
import OutsideClickHandler from 'react-outside-click-handler';

export default function Navbar() {
    const [modalOpenInfo, setModalOpenInfo] = useState(false)
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        setModalOpenInfo(true)
    }
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarTopSide}>
                <div className={styles.navbarTopInner}>
                    <ul className={styles.navbarTopLeft}>
                        <li>
                            <span style={{ marginRight: 7 }}>EN</span> <Image src="/arrowdown.svg" alt="arrow" width="12" height="6,86" />
                        </li>
                        <Image src="/stick.svg" alt="arrow" width="1" height="35" />
                        <li>
                            <Link href="/">
                                <a>SHOP</a>
                            </Link>

                        </li>
                        <Image src="/stick.svg" alt="arrow" width="1" height="35" />
                        <li>
                            <Link href="/">
                                <a>SSS</a>
                            </Link>
                        </li>
                        <Image src="/stick.svg" alt="arrow" width="1" height="35" />
                        <div className={styles.navbarTopLeftSocial}>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-facebook-square"></i></a>
                            </Link>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-instagram"></i></a>
                            </Link>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-youtube"></i></a>
                            </Link>
                        </div>
                    </ul>
                    <ul className={styles.navbarTopRight}>
                        <li>
                            <Link href="/">
                                <a>Satıcı Başvuru</a>
                            </Link>
                        </li>
                        <Image src="/stick.svg" alt="arrow" width="1" height="35" />
                        <li>
                            <Link href="/">
                                <a>Yardım&Destek</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.navbarCenter}>
                <div className={styles.navbarCenterTop}>
                    <div className={styles.navbarLogo}>
                        <h1 style={{ cursor: 'pointer' }}>LOGO</h1>
                    </div>
                    <div className={styles.navbarSearch}>
                        <Image src="/search.svg" alt="arrow" width="23" height="23" />
                        <form onSubmit={handleSubmitSearch}>
                            <input required placeholder='Search' className={styles.navbarSearchInput}></input>
                        </form>
                    </div>
                    <div className={styles.navbarCenterLinks}>
                        <Link href="/">
                            <a><Image src="/usericon.svg" alt="arrow" width="21,6" height="23" /></a>
                        </Link>
                        <Link href="/">
                            <a><Image src="/hearticon.svg" alt="arrow" width="25,91" height="23" /></a>
                        </Link>
                        <Link href="/">
                            <a><span className={styles.basketCount}>2</span><Image src="/basketicon.svg" alt="arrow" width="25,49" height="23" /></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.navbarBottomSide}>
                <div className={styles.navbarBottomSideInner}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>EL YAPIMI</a>
                            </Link>

                        </li>
                        <li>
                            <Link href="/">
                                <a>YEREL ÜRÜNLER</a>
                            </Link>

                        </li>
                        <li>
                            <Link href="/">
                                <a>ORGANİK GIDA</a>
                            </Link>
                        </li>
                        <Popup
                            flowing
                            hoverable
                            className="navbarPopup"
                            pinned
                            position='bottom left'
                            trigger={
                                <li>
                                    <Link href="/"><a>TAKI</a></Link>
                                </li>
                            }>
                            <ul className={styles.popupLinks}>
                                <Link href="/">
                                    <a>
                                        <li>
                                            LOREM İPSUM
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            LOREM İPSUM
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            LOREM İPSUM
                                        </li>
                                    </a>
                                </Link>
                            </ul>
                        </Popup>
                    </ul>
                </div>
            </div>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setModalOpenInfo(false);
                }}
            >
                <div className={modalOpenInfo ? styles.searchResults : `${styles.searchResults} ${styles.searchResultsClose}`}>
                    <div className={styles.searchResultsLeft}>
                        <div className={styles.searchResultsLeftTop}>
                            <ul>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                            </ul>
                        </div>
                        <h5>Satıcılar</h5>
                        <div className={styles.searchResultsLeftBottom}>
                            <ul>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                                <li>
                                    Lorem İpsum Dolor
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.searchResultsRight}>
                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a>
                                <div className={styles.searchResultsCard}>
                                    <div className={styles.srCardImage}>
                                        <img src="./bulgur.svg"></img>
                                    </div>
                                    <div className={styles.resultProductInfo}>
                                        <p>Beyorganik</p>
                                        <p>Pilavlık Bulgur Köy Tipi </p>
                                        <p><span>60,16 TL</span> 30,08 TL</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </OutsideClickHandler>
        </nav>
    )
}
