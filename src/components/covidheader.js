import React, { Component } from 'react';
import styles from './mystyle.module.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';


class CovidHeader extends Component{

render(){return (
      <div id="logo"><img
        src={logo}
        width="10%"
        height="10%"
        className="d-inline-block align-top"
        alt="TrackCovid-19"
      /></div>
    
  )}


}

export default CovidHeader;