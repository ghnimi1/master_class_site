import React, { Component } from 'react';
import './Service.css'

class Service extends Component {
    render() {
        return (
                <div id='service' className="col-8 mt-5 col-md-4 ">
                    <i className={this.props.service.font}></i>
                        <div className="card-ite">
                            <h5 className="card-title">{this.props.service.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                );
            }
        }
        
export default Service;