import React, { useEffect, useState } from "react";
import { Modal, Form, Select, Skeleton, Input } from "antd";

import { getUsers } from "../../../services/users";
import { getDivida } from "../../../services/dividas";

const { useForm, Item } = Form;
const { Option } = Select;

function DividaModal({ divida, visible, onCancel, onSubmit }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = useForm();

  useEffect(() => {
    const fetchUsers = () => {
      getUsers()
        .then(({ data }) => {
          setUsers(data);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    };

    const fetchDivida = () => {
      getDivida(divida)
        .then(({ data }) => {
          const { result } = data;
          if (result) {
            form.setFieldsValue({
              idUsuario: result.idUsuario,
              motivo: result.motivo,
              valor: result.valor,
            });
          }
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    };

    fetchUsers();
    fetchDivida();
  }, [visible, divida]);

  if (loading) return <Skeleton />;

  return (
    <Modal
      title={divida ? "Editar dívida" : "Nova dívida"}
      visible={visible}
      okText="Salvar"
      cancelText="Cancelar"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCancel();
            onSubmit(values);
          })
          .catch((error) => {});
      }}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
    >
      <Form layout="vertical" form={form}>
        <Item
          name="idUsuario"
          label="Cliente"
          rules={[{ required: true, message: "Informe um cliente" }]}
        >
          <Select placeholder="Usuário do JSON Placeholder">
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </Item>
        <Item
          name="motivo"
          label="Motivo"
          rules={[{ required: true, message: "Informe um motivo" }]}
        >
          <Input placeholder="Ex: dívida de crédito" />
        </Item>
        <Item
          name="valor"
          label="Valor"
          rules={[{ required: true, message: "Informe o valor da dívida" }]}
        >
          <Input type="number" placeholder="Ex: R$ 500,00" />
        </Item>
      </Form>
    </Modal>
  );
}

export default DividaModal;
