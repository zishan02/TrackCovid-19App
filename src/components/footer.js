import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Footer extends Component {

    render() {
        return (<div>
            <Button variant="primary" href="https://github.com/zishan02/TrackCovid-19App">GIT HUB Open Source Project</Button><br/>
            <Button variant="primary" href="https://github.com/zishan02/TrackCovid-19App">Contribute</Button>
            <h5>Disclaimer : All data is fetched from government Websites</h5></div>

        )

}}

export default Footer;