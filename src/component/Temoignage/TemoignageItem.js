import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Temoignage.css'

class TemoignageItem extends Component {
    render() {
        return (
            <>
                       <div className="item">
    
                            <div className="card-deck">
                                <div className="card">
                                    <div className='info'>
                                        <img className="card-img-top" src="./img/prof2.jpg" alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.temoignage.username}</h5>
                                        <p className="card-text">{this.props.temoignage.commentaire}</p>
                                    </div>
                                </div>
                            </div> </div>
                            </>
        );
    }
}

export default TemoignageItem;