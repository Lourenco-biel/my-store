import React from "react";

import { BrowserRouter, Route, Switch, Redirect, RouteProps } from "react-router-dom";
import {Registration} from './Container/Registration'
import {Home} from './Container/Home'
import {ListProducts} from './Container/ListProducts'

interface PrivateRouteProps extends RouteProps {

    component: any;

}

const PrivateRoute = (props: PrivateRouteProps) => {
    
    const { component: Component, ...rest } = props;

    const userName = localStorage.getItem("userName")

    return (

        <Route { ...rest }
            render={props => userName ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname:"/", state: {from: props.location}}}/>
            )}
        />

    );

};

const myRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <Home/>}/>
                <PrivateRoute exact path="/products" component={() => <Registration/>}/>
                <PrivateRoute exact path="/List" component={() => <ListProducts/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export  default myRoutes;