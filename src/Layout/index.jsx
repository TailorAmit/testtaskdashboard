import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import { Row, Col, Divider } from 'antd';
import './style.scss'
import { Sidebar } from './sidebar';
import { TopHeader } from './TopHeade/index';
import { MenuOutlined, StopTwoTone } from '@ant-design/icons';

export const SideBar = ({ component: Component, ...props }) => {
  const style = { padding: '8px 0' };

  return (
    <Route {...props} render={routeProps => (
      <Row >
        <Col className="gutter-row" span={3}>
        </Col>
        <Col span={4}>
          <div style={{ marginLeft: 20, display: "flex", alignItems: "center" }}>
            <div>

              <MenuOutlined style={{ fontSize: 15, fontWeight: 'bold' }} />
            </div>
            <div style={{ marginLeft: 25, display: "flex", alignItems: "center" }}>
              <StopTwoTone style={{ fontSize: 30, fontWeight: "bold" }} />
              <span style={{ fontSize: 30, color: "#2c7be4", marginLeft: 5, fontWeight: "bold" }}>TRAFFIX</span>
            </div>
          </div>
          <Sidebar />
        </Col>
        <Col className="gutter-row" span={14}>
          <TopHeader />
          <div className="main-app-content-wrapper" >
            <Component {...routeProps} />
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
        </Col>
      </Row>

    )} />
  );
};


