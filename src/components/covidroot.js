import React, { Component } from 'react';
import CovidHeader from './covidheader';
import LastUpdated from './lastupdated';
import CovidTable from './covidtable';
import {Helmet} from "react-helmet";

import {
    BrowserRouter as Router,
    Route
    
  } from "react-router-dom";
import AdminPanel from './adminpanel';
import Footer from './footer';
import CovidDetailsPanel from './coviddetailspanel';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import Source from './source';
import LatestUpdates from './latestupdates';
import CovidLineChart from './covidlinechart';

class CovidRoot extends Component{

render(){

return (  
  <MDBContainer>
    
  <MDBRow>
  <MDBCol size="6" md="4"></MDBCol>
    <MDBCol size="6" md="4"> <div id="rootcomp">
  <Helmet>
  <meta name="google-site-verification" content="-j6VE9vHNhTU-me0WuTjM8kXmnlA6p_3sU4g2GD-GqU" />
     <meta name="covid" content="covid tracker" />
     <meta name="corona" content="corona virus tracker" />
     </Helmet>  
<Router>
<Route exact path="/">
<CovidHeader/>
<Source/><LastUpdated/>


</Route>
<Route exact path="/admin">
            <CovidHeader/>
            <AdminPanel /></Route>
            </Router>
        </div>  </MDBCol>
    <MDBCol size="6" md="4"> Details</MDBCol>
  
  </MDBRow>
  <MDBRow>
  <MDBCol size="6" md="4"><CovidDetailsPanel/></MDBCol>
  <MDBCol size="6" md="4">
  <CovidTable/>

  </MDBCol>
  <MDBCol size="6" md="4">
  <CovidLineChart/>
  </MDBCol>
  </MDBRow>
  <MDBRow>
  <MDBCol ><Footer/></MDBCol>
  </MDBRow>
  </MDBContainer>
)
    

}



}

export default CovidRoot;