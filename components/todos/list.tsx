"use client";
import { Table } from "antd";
import React from "react";

type User = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

interface TodoListTypes {
  data: User[];
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];

export default function TodoList({ data }: TodoListTypes) {
  const dataSource = data.map((each) => {
    return {
      name: each.name,
      username: each.username,
      email: each.email,
      phone: each.phone,
    };
  });
  return (
    <div>
      <p>list</p>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
