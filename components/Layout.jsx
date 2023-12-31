'use client'
import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='layout'>

      <Head>
        <title>David Leather Website</title>
      </Head>
      <header>
        <Navbar/>
      </header>

      <main className='main-container'>
          
      </main>

      <footer>
          <Footer/>
      </footer>

    </div>
  )
}

export default Layout;