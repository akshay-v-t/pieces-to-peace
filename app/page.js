import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BelowHeader from './sections/BelowHeader'
import AboutSection from './sections/AboutSection'
import CategoriesSection from './sections/CategoriesSection'
import KeyFeatures from './sections/KeyFeatures'
import OurValuesSection from './sections/OurValuesSection'

const Home = () => {
  return (
    <main>

      <div className='text-2xl  flex  flex-col min-h-screen  '>
        <div className='w-full'>

        </div>

       <Header/>

       <Hero/>

       <AboutSection/>
       <BelowHeader/>
       <CategoriesSection/>
       <KeyFeatures/>
       <OurValuesSection/>


       <Footer/>
      </div>
    </main>
  )
}

export default Home
