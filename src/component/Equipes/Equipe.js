import React, { Component } from 'react';
import './Equipe.css'
class Equipe extends Component {
    render() {
        const {equipe}=this.props
        return (
                <div className="col-6 col-md-3 " id='equipe' >
                    <div className='for' style={{width:'50%'}}>
                        <img src='./img/prof1.jpg'/>
                    </div>
                    <div>
                        <p style={{fontWeight:'bold',color:'black'}}>{equipe.username}</p>
                        <p style={{color:'white'}}>{equipe.metier}</p>
                    </div>
                    
                </div>            
        );
    }
}

export default Equipe;