import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Screen Components/Navbar'
import HeroSection from '../Sub Sections/HeroSection'
import Footer from '../Screen Components/Footer'
import FixedImgSection from '../Sub Sections/FixedImgSection'
import QuoteSection from '../Sub Sections/QuoteSection'
import WorkGlimpse from '../Sub Sections/WorkGlimpse'
import InstaFeedComponent from '../Screen Components/InstaFeedComponent'
import InstaFeedSection from '../Sub Sections/InstaFeedSection'
import StoriesSection from '../Sub Sections/StoriesSection'
import ServicesSection from '../Sub Sections/ServicesSection'
import ClientSpeaksSection from '../Sub Sections/ClientSpeaksSection'
import FeaturedOnSection from '../Sub Sections/FeaturedOnSection'
import { Form } from 'react-router-dom'
import OnLoadForm from '../Screen Components/OnLoadForm'
import Teams from '../Sub Sections/Teams'

function Homepage() {

  const [formIsVisible, setFormIsVisible] = useState(false);
  const formDisplayedRef = useRef(false);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than a certain value (e.g., 100px)
    if (scrollPosition > 1000 && !formDisplayedRef.current) {
      setFormIsVisible(true);
      formDisplayedRef.current = true; 
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="w-full relative flex flex-col items-center justify-center text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ">
    <Navbar location={'/'}/>
    <OnLoadForm formIsVisible={formIsVisible } setFormIsVisible={setFormIsVisible}/>
    <HeroSection/>
    <QuoteSection/>
    <FixedImgSection/>
    <WorkGlimpse/>
    <Teams/>
    <InstaFeedSection/>
    <StoriesSection/>
    <ServicesSection/>
    <ClientSpeaksSection/>
    <FeaturedOnSection/>
    <Footer/>
    </div>
  )
}

export default Homepage