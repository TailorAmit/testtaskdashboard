import React from 'react'
import { CommonTable } from 'Components/Table'
import { Card, Col, Row, Tag } from 'antd'
import { EllipsisOutlined, InfoCircleOutlined } from '@ant-design/icons'
import './style.scss'
const Dashboard = () => {
  let Data1 = [
    {
      title: "Congestion",
      data: "80%",
      percentage: {
        tages: "+14.5%",
        backgroundColor: "#ffefef",
        color: "#C04000",
      }
    },
    {
      title: "Speed",
      data: "25 kmph",
      percentage: {
        tages: "+3.5%",
        tages2: "+2.07%",
        backgroundColor: "#cbf6e3",
        color: "#1e9060",
      }
    },
    {
      title: "Travel Time /km ",
      data: "3 min",
      percentage: {
        tages: "+10.8%",
        tages2: "+2.07%",
        backgroundColor: "#cbf6e3",
        color: "#1e9060",
      }

    },
  ]

  let Data2 = [
    {
      title: "Most Congested Route",
      percentage: "80%",
      link: "Iscon Mandir to viashnodevi  circle >"
    },
    {
      title: "Most Congested Route",
      percentage: "80%",
      link: "Iscon Mandir to viashnodevi  circle >"
    },
    {
      title: "Most Congested Route",
      percentage: "80%",
      link: "Iscon Mandir to viashnodevi  circle >"
    },


  ]
  return <div className="dashboard-main">

    <div className="section1" style={{ paddingTop: 10, paddingBottom: 20 }}>
      <Row gutter={15}>
        {Data1.map((d) => {
          return <Col className="gutter-row" span={12} style={{ height: 180, paddingTop: 20 }}>
            <Card style={{ height: "100%", width: "100%", borderRadius: 10 }} >
              <div className="header">
                <div><span style={{ paddingRight: 5 }}>{d.title}</span> <InfoCircleOutlined /></div>
              </div>
              <div className="times">
                {d.data}
              </div>
              <div style={{ display: "flex" }}>
                <Tag color={d.percentage.backgroundColor} key={d.percentage.tages} style={{ borderRadius: 11 }}>
                  <span style={{ color: d.percentage.color, fontWeight: 800 }}>{d.percentage.tages} </span>
                </Tag>
                {d?.percentage?.tages2 && <div style={{ color: d.percentage.color }}>
                  <span style={{ color: d.percentage.color, fontWeight: 800 }}> {d?.percentage?.tages2}  </span>
                </div>}
              </div>

            </Card>
          </Col>
        })}

        {Data2.map((d) => {
          return <Col className="gutter-row" span={12} style={{ height: 180, paddingTop: 20 }}>
            <Card className="card-main">
              <div className="header1">
                <div><span style={{ paddingRight: 5 }}>{d.title}</span> <InfoCircleOutlined /></div>
              </div>
              <div className="times1">
                {d.percentage}
              </div>
              <div style={{ display: "flex", paddingTop: 10 }}>
                <a>{d.link}</a>
              </div>

            </Card>
          </Col>
        })}

      </Row>
    </div>
    <Card >
      <div className="TableHeader">
        <h1>Current Congetion</h1>
        <EllipsisOutlined style={{ fontSize: 25 }} />
      </div>
      <CommonTable />
    </Card>


  </div >
}
export default Dashboard