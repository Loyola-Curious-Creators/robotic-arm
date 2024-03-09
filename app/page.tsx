import Image from "next/image";
import Link from 'next/link'; 
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import  FinalOutputPage from '../components/final-op';
import Team from '../components/Team';

export default function Home() {
  return (
    <React.Fragment>
       
    <Header/>
    <Hero />
    <section id="gallery-section">
        {<Gallery />}
      </section>
      <section id="finalOP-section">{
<FinalOutputPage/>}
</section>
<section id="Team-section">{
<Team/>
}
</section>
<section id="Contact-section">{
    <Contact />
  }
  </section>
    <Footer />
     
  </React.Fragment>
  );
}
