import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const styles = {
	layout: 'h-screen w-screen'
}

type Props = {
  children?: ReactNode
  title?: string
  footer?: boolean
}

const Layout = ({ children, title = 'This is the default title', footer = false}: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
    	{footer && (
        <span>I'm here to stay (Footer)</span>
    	)}
    </footer>
  </div>
)

export default Layout
