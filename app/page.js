import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BelowHeader from './sections/BelowHeader'
import AboutSection from './sections/AboutSection'
import CategoriesSection from './sections/CategoriesSection'

const Home = () => {
  return (
    <main>

      <div className='text-2xl  flex  flex-col min-h-screen '>

       <Header/>

       <Hero/>

       <AboutSection/>
       <BelowHeader/>
       <CategoriesSection/>

       <Footer/>
      </div>
    </main>
  )
}

export default Home
