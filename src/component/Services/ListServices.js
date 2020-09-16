import React, { Component } from 'react';
import Service from './Service';
import './ListServices.css'

class ListServices extends Component {
    state={
        services:[
        {font:"fa fa-user fa-2x" ,title:'FORMATION RAPIDE ET CONTINUE'},
        {font:"fa fa-graduation-cap fa-2x" ,title:'SUIVI & ENCADREMENT POUR LES PFE'},
        {font:"fa fa-laptop fa-2x" ,title:'DEVELOPPEMENT WEB/MOBILE'}
    ]}
    render() {
        const {services}=this.state
        const renderServices=services.map((service,index)=>{
            return <Service key={index} service={service}/>
        })
        return (
            <div className='container'>
                <div id='services' className='row'>
                <div>
                  <h2>NOS SERVICES</h2>
                </div>
                <hr className="bottom-line"/>

                <div className='row'>
                    {renderServices}
                </div>
            </div>
            </div>
            
        );
    }
}

export default ListServices;