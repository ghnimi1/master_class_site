import React, { Component } from 'react';
import './ListEquipes.css'
import Equipe from './Equipe';
import Axios from 'axios';

class ListEquipes extends Component {
    state = {
        equipes: []
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/equipes/')
          .then(response => {
            this.setState({ equipes: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        console.log(this.state.equipes);
        

        const { equipes } = this.state;
        const renderEquipe = equipes.map((equipe, index) => {
            return <Equipe key={index} equipe={equipe} />
        })
        return (
            <div className='j'>
                <div id='equipes'>
                    <div>
                        <h2>Nos Equipes</h2>
                    </div>
                    <hr className="bottom-line" />

                    <div className='row' id="listequipe">
                        {renderEquipe}
                    </div>
                </div>
            </div>

        );
    }
}

export default ListEquipes;