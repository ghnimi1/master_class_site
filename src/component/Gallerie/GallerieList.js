import React, { Component } from 'react';
import GallerieImg from './GallerieImg';
import './GallerieList.css'

class GallerieList extends Component {
    state={
        galleries:[
            {img:'./img/gallerie1.jpg'},
            {img:'./img/gallerie2.jpg'},
            {img:'./img/gallerie3.jpg'},
            {img:'./img/gallerie4.jpg'},
            {img:'./img/gallerie5.jpg'},
            {img:'./img/gallerie6.jpg'},
            {img:'./img/gallerie1.jpg'},
            {img:'./img/gallerie2.jpg'}
        ]
    }
    render() {
        const {galleries}=this.state;
        const renderGallerie=galleries.map((gallerie,index)=>{
            return <GallerieImg key={index} gallerie={gallerie}/>
        })
        return (

            <div className='container'>
                <div id='galleries' className='row'>
                    <div>
                        <h2>GALLERIE</h2>
                        <span>Nos formations en quelques photos</span>
                    </div>
                    <hr className="bottom-line" />
                    <div className='row'>
                        {renderGallerie}
                    </div>
                </div>
            </div>

        );
    }
}
export default GallerieList;