import { notification } from "antd";
import React, { useEffect, useState } from "react";

import List from "../../components/Dividas/List";
import { getDividas } from "../../services/dividas";

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
      .catch(({ response }) => {
        notification.error({
          description: "Erro ao listar as dívidas",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    fetch();
  }, [divida]);

  return (
    <>
      <h2>Dívidas</h2>
      <List
        dividas={dividas}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Dividas;
