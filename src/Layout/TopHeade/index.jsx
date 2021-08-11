import React from 'react'
import { Avatar, Col, Input, Row } from 'antd'
import { SearchOutlined, SettingTwoTone, BellTwoTone, UserOutlined } from '@ant-design/icons';
export const TopHeader = () => {
  return <Row>
    <Col span={11}>
      <Input
        style={{ height: 50, borderRadius: 20 }}
        placeholder="Search..."
        prefix={<SearchOutlined />}
      />
    </Col>

    <Col span={3} offset={10}>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <SettingTwoTone style={{ fontSize: 30 }} />
        <BellTwoTone style={{ fontSize: 30 }} />
        <Avatar size={40} icon={<UserOutlined />} />
      </div>

    </Col>


  </Row>
}