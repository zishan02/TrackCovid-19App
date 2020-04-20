import React, { Component } from 'react';
import CovidHeader from './covidheader';
import LastUpdated from './lastupdated';
import CovidTable from './covidtable';
import {
    BrowserRouter as Router,
    Route
    
  } from "react-router-dom";
import AdminPanel from './adminpanel';
import Footer from './footer';
import CovidDetailsPanel from './coviddetailspanel';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import Source from './source';
import CovidLineChart from './covidlinechart';
import RateOfIncreaseTable from './rateofincreasetable';
import CovidTop5 from './CovidTop5';

class CovidRoot extends Component{

render(){

return (  
  <MDBContainer>
    
  <MDBRow>
  <MDBCol size="6" md="4"></MDBCol>
    <MDBCol size="6" md="4"> <div id="rootcomp">
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
    
  
  </MDBRow>
  <MDBRow>
  <MDBCol size="6" md="4"><CovidDetailsPanel/><RateOfIncreaseTable/><CovidTop5/></MDBCol>
  <MDBCol size="6" md="4"><CovidTable/></MDBCol>
</MDBRow>
  <MDBRow>
  <MDBCol size="12" md="12" sm="1"><CovidLineChart/></MDBCol>
  </MDBRow>
  <MDBRow>
  <MDBCol ><Footer/></MDBCol>
  </MDBRow>
  </MDBContainer>
)
    

}



}

export default CovidRoot;