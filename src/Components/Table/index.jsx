import React from 'react'
import { Button, Col, Row, Table, Tag } from 'antd';

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Route Name',
    dataIndex: 'routeName',
    defaultSortOrder: 'descend',
    render: routeName => <a href="#">{routeName}</a>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'City',
    dataIndex: 'city',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'State',
    dataIndex: 'state',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Congestion',
    dataIndex: 'congestion',
    render: congestion => {
      return <div style={{ display: "flex" }}>
        <Tag color={congestion.color} key={congestion.benifit} style={{ borderRadius: 11 }}>
          {congestion.parcentage} %
        </Tag>
        <div style={{ color: congestion.color }}>
          {congestion.benifit} %
        </div>
      </div>
    },
    sorter: (a, b) => a.age - b.age,
  },
];

const data = [
  {
    key: '1',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '2',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '3',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '4',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '5',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '6',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '7',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },
  {
    key: '8',
    routeName: "Iscon Mandir to Viashnodevi Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "india",
    congestion: {
      parcentage: "10.58",
      benifit: "-2.1",
      color: "green"
    }
  },

];


export const CommonTable = () => {
  const style = { padding: '8px 0' };

  return <div>
    <Table columns={columns} pagination={false} dataSource={data} />
    <div style={{ paddingTop: 15, paddingBottom: 15 }}>
      <Row >
        <Col className="gutter-row" span={17}>
          <div style={style}>1 to 10 of 20 - <a style={{ fontWeight: 'bold' }} >{`view all >`}</a></div>
        </Col>
        <Col className="gutter-row" span={7} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button style={{ width: 115, height: 35, border: 'none', color: "gray" }}>Previos</Button>
          <Button type="primary" style={{ width: 115, height: 35, borderRadius: 5 }}>Next</Button>
        </Col>

      </Row>
    </div>
  </div >
}