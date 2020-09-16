import React, { Component } from 'react';
import './Formation.css'
class Formation extends Component {
    render() {
        return (
            <div className="col-6 col-md-4" id='formation' >
                <div className='for'>
                    <img src={this.props.formation.img} />
                    <div className="overlay">
                        <div className='cont'>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <i className='fa fa-search' style={{padding:"3px 15px",backgroundColor:'steelblue'}}/>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Formation;