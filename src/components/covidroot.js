import React, { Component } from 'react';
import Source from './source';
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

class CovidRoot extends Component{

render(){

return (
<Router>
<Route exact path="/">
<CovidHeader/>
<Source/><LastUpdated/>
<CovidDetailsPanel/>
<CovidTable/>
<Footer/>
</Route>
<Route exact path="/admin">
            <CovidHeader/>
            <AdminPanel /></Route>
            </Router>
)
    

}



}

export default CovidRoot;