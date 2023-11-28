import React from "react";
import { Layout, Menu, Button, Table, Popover } from "antd";
import {
  DownloadOutlined,
  EditOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  HomeOutlined,
  TransactionOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import "./Profile.scss";

const { Sider, Content } = Layout;

const Profile = () => {
  // Sample Data for the Table

  const data = [
    {
      key: "1",
      date: "Mar 12",
      description: "WeWork",
      category: "Office",
      amount: "$175.00",
    },
    {
      key: "2",
      date: "Mar 13",
      description: "IKEA",
      category: "Home",
      amount: "$450.00",
    },
    {
      key: "3",
      date: "Mar 14",
      description: "Home Depot",
      category: "Home",
      amount: "$200.00",
    },
    {
      key: "4",
      date: "Mar 15",
      description: "Burger King",
      category: "Food",
      amount: "$15.00",
    },
  ];

  // Columns for the Table
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Popover content={actionMenu} trigger="click">
          <Button shape="circle" icon={<EditOutlined />} />
        </Popover>
      ),
    },
  ];

  // Action Menu for Popover
  const actionMenu = (
    <div>
      <Button icon={<EditOutlined />} type="text">
        Edit
      </Button>
      <Button icon={<ShareAltOutlined />} type="text">
        Share
      </Button>
      <Button icon={<DeleteOutlined />} type="text">
        Delete
      </Button>
    </div>
  );

  return (
    <Layout className="layout">
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["2"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<TransactionOutlined />}>
            Services
          </Menu.Item>
          <Menu.Item key="3" icon={<AccountBookOutlined />}>
            Account
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="header">
            <h1>Your Services</h1>
            <Button icon={<DownloadOutlined />} type="primary">
              Download
            </Button>
          </div>
          <Table dataSource={data} columns={columns} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
