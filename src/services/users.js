import axios from "axios";

export function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

export function getUser(id) {
  return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
}
