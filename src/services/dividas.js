import axios from "axios";

const BASE_URL = "https://provadev.xlab.digital/api/v1/divida/";
const UUID = "5ae46916-932e-4217-9e9d-f09e56e112ff";

const params = {
  uuid: UUID,
};

export function getDividas() {
  return axios.get(`${BASE_URL}`, { params: params });
}

export function getDivida(id) {
  return axios.get(`${BASE_URL}${id}`, { params: params });
}

export function createDivida(divida = {}) {
  return axios.post(`${BASE_URL}`, divida, { params: params });
}

export function updateDivida(id, divida = {}) {
  return axios.put(`${BASE_URL}${id}`, divida, { params: params });
}

export function deleteDivida(id) {
  return axios.delete(`${BASE_URL}${id}`, { params: params });
}
