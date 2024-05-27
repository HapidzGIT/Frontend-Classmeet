import React from 'react';
import NavbarTop from '../components/NavbarTop';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection';
import TeamSection from '../components/TeamSection';
import CardComponent from '../components/CardComponent';

const HomePages = () => {
  document.title = 'Homepages';

 

  return (
    <div >
      <NavbarTop  id='Homepages' id_2 = 'About' id_3 = 'Teams' id_4 = 'Contact' />
      <HeroSection id='Homepages' />
      <AboutSection id='About'/>
      <CardComponent id='Card'/>
      <TeamSection id='Teams' />
      <FooterSection id='Contact' />
    </div>
  );
};

export default HomePages;
