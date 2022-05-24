import Link from 'next/link'
import Layout from '../components/Layout'
import Splash from '../components/Splash'
import Countdown from '../components/Countdown'

const styles = {
	message: 'text-2xl md:text-7xl font-extrabold text-slate-900'
}

const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000
const NOW_IN_MS = new Date().getTime()
const DATETIME_TARGET = NOW_IN_MS + FOUR_DAYS_IN_MS

const IndexPage = () => (
  <Layout title="OnlyAds">
  	<Splash>
  		<img src="oa.svg" alt="onlyads logo"
  			className={'cursor-pointer object-contain h-12 w-12 mb-2 transition duration-125 transform hover:scale-125'}
  			/>
    	<h1 className={styles.message}>Coming Soon</h1>
    	<Countdown targetDate={DATETIME_TARGET} />
    </Splash>
  </Layout>
)

export default IndexPage
