import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from './Redux/Actions/index'
 class App extends Component {
   incrimentAction=()=>{
     this.props.increment()
   }
   decrimentAction=()=>{
    this.props.decrement()
  }
  render() {
    return (
      <div className="App">
      <button onClick={()=>{
        this.incrimentAction()
      }}>+</button><br></br>
      <button
      onClick={()=>{
        this.decrimentAction()
      }}
      >-</button><br></br>
      <p style={{backgroundColor:'red',color:'black'}}>{this.props.count.count}</p>
     </div>
    );
  }
}


const mapStateToProps = state => {
  const count = state.count;
  return {
    count,
  };
};

const mapDispatchToProps = {
 increment,
 decrement
};

export default connect(mapStateToProps,mapDispatchToProps) (App);

