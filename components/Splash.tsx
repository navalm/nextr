import React, { ReactNode } from 'react'

const styles = {
	container: 'h-full w-full flex flex-col items-center justify-center bg-transparent bg-blend-multiply'
}

type Props = {
  children?: ReactNode
}

const Splash = ({ children }: Props) => (
	<section id="splash" className={styles.container}>
		{children}
	</section>
)

export default Splash