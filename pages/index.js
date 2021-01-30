import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import HomePageTopSlider from '../components/HomePageTopSlider.js'
import HomePageBottomSlider from '../components/HomePageBottomSlider.js'
import HomePageGrid from '../components/HomePageGrid.js'
import HomePageBottomBanner from '../components/HomePageBottomBanner.js'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>

      <>
        <HomePageTopSlider />
        <HomePageGrid />
        <HomePageBottomSlider />
        <HomePageBottomBanner />
      </>

    </Layout>
  )
}
