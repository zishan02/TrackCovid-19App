import React, { Component } from 'react';
import logo from './logo.png';


class CovidHeader extends Component{

render(){return (
      <div id="logo"><img
        src={logo}
        width="50%"
        height="20%"
        className="d-inline-block align-top"
        alt="TrackCovid-19"
      /></div>
    
  )}


}

export default CovidHeader;