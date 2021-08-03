mport React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Components General */
import BarraLateral from '../componentsUser/BarraLateral/BarraLateral';
import Shorten from '../componentsUser/Encurtador/Encurtador';
import Lista from '../componentsUser/Lista/Lista';

export default props => {
    return (
        <React.Fragment>
            <SideBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/user/shorten" exact={true} component={Shorten} />
                    <Route path="/user/list" exact={true} component={List} />
                    
                </Switch>
            </ BrowserRouter>
        </React.Fragment>
    )
}