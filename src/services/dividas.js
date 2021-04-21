import instance from "./index";

export function getDividas() {
  return instance.get(BASE_URL + "divida");
}

export function getDivida(id) {
  return instance.get(BASE_URL + "divida/" + id);
}

export function createDivida(divida = {}) {
  return instance.post(BASE_URL + "divida", divida);
}

export function updateDivida(id, divida = {}) {
  return instance.put(BASE_URL + "divida/" + id, divida);
}

export function deleteDivida(id) {
  return instance.delete(BASE_URL + "divida/" + id);
}
