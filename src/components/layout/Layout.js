import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    PlusOutlined,
    AppstoreOutlined,
    SearchOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Input, Select, Avatar, Dropdown } from 'antd'; // Import Input and Select
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const LayoutWrapper = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home',
            path: "/home"
        },
        {
            key: '2',
            icon: <PlusOutlined />,
            label: 'Add Products',
            path: "/addProducts"
        },
        {
            key: '3',
            icon: <AppstoreOutlined />,
            label: 'Products',
            path: "/products"
        },
    ];

    const userMenu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Your Profile</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                <span>Logout</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: " 0 20px",
                        background: colorBgContainer,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Align items and add space between them
                    }}
                >
                    <Button
                        type="text"
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '22px',
                            width: 64,
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            padding: 0
                        }}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    {/* Search Bar */}
                    <Input placeholder="Search products..." style={{ width: 600, marginLeft: 20 }} prefix={<SearchOutlined />} />

                    {/* Category Dropdown */}
                    <Select defaultValue="all" style={{ width: 120, marginRight: 20 }}>
                        <Option value="all">All Categories</Option>
                        <Option value="electronics">Electronics</Option>
                        <Option value="clothing">Clothing</Option>
                        <Option value="books">Books</Option>
                    </Select>

                    {/* User Avatar and Menu */}
                    <Dropdown overlay={userMenu} placement="bottomRight">
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '10px',
                        padding: 24,
                        height: "calc(100vh - 84px)",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutWrapper;

