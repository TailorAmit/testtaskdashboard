import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react'
import { PieChartFilled, MailOutlined, SettingOutlined, PieChartOutlined } from '@ant-design/icons';
export const Sidebar = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const onOpenChange = keys => {

    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <Menu.Item key="1" icon={<PieChartFilled />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<PieChartOutlined />}>
        Analytics
      </Menu.Item>
      <SubMenu key="3" icon={<MailOutlined />} title="Reports">
        <Menu.Item key="31">Hourly Analytics</Menu.Item>
        <Menu.Item key="32">Day wise Analytics</Menu.Item>
      </SubMenu>
      <SubMenu key="4" icon={<MailOutlined />} title="Settings">
        <Menu.Item key="41">Hourly Analytics</Menu.Item>
        <Menu.Item key="42">Day wise Analytics</Menu.Item>
      </SubMenu>
      <SubMenu key="5" icon={<MailOutlined />} title="Accounts">
        <Menu.Item key="51">Hourly Analytics</Menu.Item>
        <Menu.Item key="52">Day wise Analytics</Menu.Item>
      </SubMenu>
      <Menu.Item key="6" icon={<PieChartOutlined />}>
        Documentation
      </Menu.Item>
      <Menu.Item key="7" icon={<PieChartOutlined />}>
        change log
      </Menu.Item>
    </Menu>
  );
}