import React, { useEffect, useState } from "react";
import { Button, notification, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import List from "../../components/Dividas/List";
import Modal from "../../components/Dividas/Modal";
import {
  getDividas,
  createDivida,
  updateDivida,
  deleteDivida,
} from "../../services/dividas";

import { PageHeader } from "./styleds";

function Dividas() {
  const [dividas, setDividas] = useState([]);
  const [divida, setDivida] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const fetch = () => {
    setLoading(true);
    getDividas()
      .then(({ data }) => {
        const { result } = data;
        setDividas(result);
      })
      .catch(() => {
        notification.error({
          description: "Erro ao listar as dívidas",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleEdit = (id) => {
    setDivida(id);
    setVisible(true);
  };

  const handleDelete = (id) => {
    deleteDivida(id)
      .then(() => {
        fetch();
      })
      .catch(() => {
        notification.error({
          description: "Erro ao excluir a dívida",
        });
      });
  };

  const handleSubmit = (values) => {
    if (divida) {
      updateDivida(divida, values)
        .then(() => {
          fetch();
        })
        .catch(() => {
          notification.error({
            description: "Erro ao editar a dívida",
          });
        });
    } else {
      createDivida(values)
        .then(() => {
          fetch();
        })
        .catch(() => {
          notification.error({
            description: "Erro ao criar a dívida",
          });
        });
    }
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <PageHeader>
        <h2>Dívidas</h2>
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={toggleModal}>
            Nova divida
          </Button>
        </Space>
      </PageHeader>
      <List
        dividas={dividas}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        visible={visible}
        divida={divida}
        onCancel={() => {
          setDivida(null);
          toggleModal();
        }}
        onSubmit={handleSubmit}
      ></Modal>
    </div>
  );
}

export default Dividas;
