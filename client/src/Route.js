import React from 'react';
import LanchDetails from './LanchDetails';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import MainPage from './Mainpage';
import RocketDetails from './RocketDetails';
function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={MainPage}></Route>
                <Route exact path='/launch/:flight_id' component={LanchDetails}></Route>
                <Route exact path='/rocket/:rocket_id' component={RocketDetails}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;