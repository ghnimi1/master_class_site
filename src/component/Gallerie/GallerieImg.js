import React, { Component } from 'react';
import './GallerieImg.css'

class GallerieImg extends Component {
    render() {
        return (
            <div id='gallerie' className="col-10 col-md-3 ">
                        <div className="card-ite">
                            <img src={this.props.gallerie.img} />
                        </div>
                </div>
        );
    }
}

export default GallerieImg;