import React, { Component } from 'react';
import './FormationsList.css'
import Formation from './Formation';

class FormationsList extends Component {
    state={
        formations:[
            {img:'./img/formation1.jpg'},
            {img:'./img/formation2.jpg' },
            {img:'./img/formation3.png' },
            {img:'./img/formation4.jpg' },
            {img:'./img/formation5.png'},
            {img:'./img/formation6.png'}
        ]
    }
    render() {
        const {formations}=this.state;
        const renderFormatons=formations.map((formation,index)=>{
            return <Formation key={index} formation={formation}/>
        })
        return (
            <div className='container'>
            <div id='formations'>
            <div>
              <h2>Nos Formations</h2>
            </div>
            <p style={{textAlign:'center'}}>
                Master class vous propose plusieurs formations continues sur les nouvelles technologies, langages de programmation et les frameworks qui sont en tendance dans le marché international.

</p>            <hr className="bottom-line"/>

            <div className='row' id="listformation">
                    {renderFormatons}
                </div>
        </div>
        </div>
        
        );
    }
}

export default FormationsList;