import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import './style.scss'

export const SideBar = ({ component: Component, ...props }) => {

  return (
    <Route {...props} render={routeProps => (
      <>
        <div>
        </div>
        <div className="main-app-content-wrapper" >
          <Component {...routeProps} />
        </div>
      </>
    )} />
  );
};


