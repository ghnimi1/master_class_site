import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <div id='contact' className='row'>
                    <div className='textcenter'>
                        <h2>Contactez Nous</h2>
                        <span>Si vous avez des questions, n'hésitez pas à nous contacter.</span>
                    </div>
                    <hr className="bottom-line" />
                    <div className='row'>
                       <div className='col-6' id="inputtext">
                           <input type='text' placeholder='Votre Nom'/>
                           <input type='text' placeholder='Votre Prenom'/>
                           <input type='Email' placeholder='Votre Email'/>
                           <button>ENVOYER UN EMAIL</button>
                       </div>
                       <div className='col-6' id='textarea'>
                           <textarea placeholder='Message'/>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;