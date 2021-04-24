import React from "react";
import { Button, Popconfirm, Space, Table } from "antd";
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
          <Popconfirm
            title="Deseja realmente excluir essa dívida"
            onConfirm={() => onDelete(record._id)}
            okText="Excluir"
            cancelText="Cancelar"
            okType="danger"
          >
            <Button type="primary" icon={<DeleteOutlined />} danger>
              Excluir
            </Button>
          </Popconfirm>
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
