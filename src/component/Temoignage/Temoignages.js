import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './Temoignage.css'
import Axios from 'axios';
import TemoignageItem from './TemoignageItem';

const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 2,

        }
    },
};
class Temoignages extends Component {
    state = {
        temoignages: []
    }

   
    componentDidMount() {
        Axios.get('http://localhost:4000/temoignages/')
            .then(response => {
                this.setState({ temoignages: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { temoignages } = this.state;
       
        return (
    <div id='temoignage' > <div >
                    <h2>Ce que nos éléves disent sur nos Formations</h2>
                </div>
            <div className='container'>
                <p style={{ textAlign: 'center' }}>
                    Les témoignages suivants sont ceux de nos élèves qui ont participé à nos formations.</p>
                <hr className="bottom-line" /> 
           {temoignages.length>0 ? (
             <OwlCarousel
                className="owl-theme"
                {...options}
            >
               { temoignages.map((temoignage,index)=>{
            return <TemoignageItem key={index} temoignage={temoignage}/>
        })
      }
               
               </OwlCarousel>  
):null}
 
               
     
            </div>
</div>



        );
    }
}

export default Temoignages;