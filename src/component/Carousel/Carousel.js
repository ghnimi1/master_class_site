import React, { Component } from 'react';
import './Carousel.css'
import Axios from 'axios';

class Carousel extends Component {
    state={
        carousels:[]
    }
    // componentDidMount() {
    //     Axios.get('http://localhost:4000/equipes/')
    //       .then(response => {
    //         this.setState({ carousels: response.data })
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }
    render() {
        return (
            <div >
                {/* {this.state.carousels.map(car=>{
                    return <p>{car._id}</p>
                })} */}
                <div id="carouselExampleInterval"
                    className="carousel slide" data-ride="carousel"
                    style={{ marginTop: '55px' }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                            <img src="./img/img1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src="./img/img2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/img1.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
                </div>
        );
    }
}

export default Carousel;