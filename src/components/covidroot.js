import React, { Component } from 'react';
import Source from './source';
import CovidHeader from './covidheader';
import LastUpdated from './lastupdated';
import CovidTable from './covidtable';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminPanel from './adminpanel';

class CovidRoot extends Component{

render(){

return (
<Router>
<Route exact path="/">
<CovidHeader/>
<Source/><LastUpdated/>
<CovidTable/>
</Route>
<Route exact path="/admin">
            <AdminPanel /></Route>
            </Router>
)
    

}



}

export default CovidRoot;