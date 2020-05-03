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
import ExpectedOutcomes from './expectedoutcomes';
import DeathChart from './deathchartadmin';
import DeathChartGraph from './deathchartgraph';

class CovidRoot extends Component{

render(){

return (  
  <div><Router>
  <MDBRow>
  <MDBCol ><CovidHeader/></MDBCol></MDBRow>
  <MDBContainer>
   
   <MDBRow>
  <MDBCol size="6" md="4"></MDBCol>
    <MDBCol size="6" md="4"><div id="rootcomp">
    <Route exact path="/">

<Source/><LastUpdated/>
</Route>
<Route exact path="/admin"><AdminPanel /></Route> 
<Route exact path="/deathadmin"><DeathChart /></Route> 
           
            
           
           
        </div>  </MDBCol>
    
  
  </MDBRow>
  <MDBRow>
  <Route exact path="/"> <MDBCol size="6" md="4"><CovidDetailsPanel/><RateOfIncreaseTable/><ExpectedOutcomes/><CovidTop5/></MDBCol>
  <MDBCol size="6" md="4"><CovidTable/></MDBCol></Route>
</MDBRow>
  <MDBRow>
  <Route exact path="/"> <MDBCol ><CovidLineChart/></MDBCol></Route>
  <Route exact path="/"> <MDBCol ><DeathChartGraph/></MDBCol></Route>
  </MDBRow>
  <MDBRow><MDBCol ><Footer/></MDBCol ></MDBRow>
  </MDBContainer>
  {/* <MDBRow>
  <MDBCol ><Footer/></MDBCol>
  </MDBRow> */}
  </Router>
  </div>
)
    

}



}

export default CovidRoot;