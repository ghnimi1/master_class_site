import React, { Component } from 'react';
import './Footer.css'
import {store} from '../../redux/store';
import {getPersistedUserAuth} from '../../redux/actions/auth';
import {connect} from 'react-redux';
class Footer extends Component {
    componentDidMount(){
        this.props.getPersistedUserAuth("mytoken");
    }
    render() {
        return (
            <div className='footer'>
            <div className='lien container'>
              <div className='socialmedia'>
                  <p>Liens Rapides</p>
                  <div>
                      <i className='fa fa-facebook' ></i><span>Facebook</span>
                  </div>
                  <div>
                      <i className='fa fa-instagram'></i><span>Instagram</span>
                  </div>
                  <div>
                      <i className='fa fa-linkedin'></i><span>LinkedIn</span>
                  </div>
              </div>
              <div className='adress'>
              <p>Trouvez Nous</p>
                  <div>
                      <i className='fa fa-safari'></i><span>Avenue de l`indépendance,  Immeuble Ben Jemia , A3   DenDen </span>
                  </div>
                  <div>
                      <i className='fa fa-envelope-o'></i><span>CentreMasterClass@gmail.com</span>
                  </div>
                  <div>
                      <i className='fa fa-phone'></i><span>+216 94 082 032</span>
                  </div>
              </div>
            </div>
            <div className='copyright'>
                Copyright 2020 <span>Master Class</span> 
            </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    const auth = state.auth;
    return {
      auth,
    };
  };
  
const mapDispatchToProps = {
    getPersistedUserAuth,
   
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )( Footer);

