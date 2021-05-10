import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Logs from './page/Logs';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Logs}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;