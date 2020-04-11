import React, { Component } from 'react';
import Source from './source';
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

class CovidRoot extends Component{

render(){

return (<div id="rootcomp">
  <Helmet>
  <meta name="google-site-verification" content="-j6VE9vHNhTU-me0WuTjM8kXmnlA6p_3sU4g2GD-GqU" />
     <meta name="covid" content="covid tracker" />
     <meta name="corona" content="corona virus tracker" />
     </Helmet>  
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
        </div>    
)
    

}



}

export default CovidRoot;