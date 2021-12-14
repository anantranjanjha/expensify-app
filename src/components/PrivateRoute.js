import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Header from './Header';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
})=>(
    <div>
        <Header />
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )}/>
    </div>
);

const mapStateToProps=(state)=>({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);