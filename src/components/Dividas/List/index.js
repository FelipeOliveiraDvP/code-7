import React from "react";
import { Button, Space, Table } from "antd";
import moment from "moment";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import formatCurrency from "../../../utils/formatCurrency";

function List({ dividas, loading, onEdit, onDelete }) {
  const columns = [
    {
      title: "Motivo",
      dataIndex: "motivo",
      key: "motivo",
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      render: (text) => formatCurrency(text),
    },
    {
      title: "Data da criação",
      dataIndex: "criado",
      key: "criado",
      render: (text) => moment(text).format("DD/MM/YYYY"),
    },
    {
      title: "Ações",
      dataIndex: "acoes",
      key: "acoes",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(record._id)}
          >
            Editar
          </Button>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            danger
            onClick={() => onDelete(record._id)}
          >
            Excluir
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dividas}
      rowKey={(row) => row._id}
      loading={loading}
    />
  );
}

export default List;
