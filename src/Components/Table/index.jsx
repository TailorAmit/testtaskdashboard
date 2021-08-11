import React from 'react'
export const CommonTable = ()=>{
  return <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
}