import React from 'react'
import { Container } from 'react-bootstrap'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const Body = () => {
    return (
        <Container fluid>
            <Container style={{ marginTop: '56px' }}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/services" exact>
                        <Services />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                </Switch>
            </Container>
        </Container>
    )
}

export default Body