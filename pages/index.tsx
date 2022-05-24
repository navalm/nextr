import Link from 'next/link'
import Layout from '../components/Layout'
import Splash from '../components/Splash'
import Countdown from '../components/Countdown'

const styles = {
	message: 'text-2xl md:text-7xl font-extrabold text-slate-900'
}

const TARGET_IN_MS = new Date(new Date('2022-05-30').getTime())

const IndexPage = () => (
  <Layout title="OnlyAds">
  	<Splash>
  		<img src="oa.svg" alt="onlyads logo"
  			className={'cursor-pointer object-contain h-12 w-12 mb-2 transition duration-125 transform hover:scale-125'}
  			/>
    	<h1 className={styles.message}>Coming Soon</h1>
    	<Countdown until={TARGET_IN_MS}/>
    </Splash>
  </Layout>
)

export default IndexPage
