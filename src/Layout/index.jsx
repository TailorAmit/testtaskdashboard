import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import { Row, Col, Divider } from 'antd';
import './style.scss'
import { Sidebar } from './sidebar';

export const SideBar = ({ component: Component, ...props }) => {
  const style = {   padding: '8px 0' };

  return (
    <Route {...props} render={routeProps => (
      <Row >
        <Col className="gutter-row" span={3}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <Sidebar/>
        </Col>
        <Col className="gutter-row" span={11}>
          <div className="main-app-content-wrapper" >
            <Component {...routeProps} />
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div style={style}>col-6</div>
        </Col>
      </Row>

    )} />
  );
};


