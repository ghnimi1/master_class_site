import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ListServices from '../Services/ListServices';
import FormationsList from '../Formations/FormationsList';
import ListEquipes from '../Equipes/ListEquipes';
import GallerieList from '../Gallerie/GallerieList';
import Temoignages from '../Temoignage/Temoignages';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
      <Carousel/>
      <ListServices/>
      <FormationsList/>
      <ListEquipes/>
      <GallerieList/>
      <Temoignages/>
      <Contact/>
      <Footer/>   
            </div>
        );
    }
}

export default Home;