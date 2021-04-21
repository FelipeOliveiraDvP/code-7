import axios from "axios";

const BASE_URL = "https://provadev.xlab.digital/api/v1/";
const UUID = "5ae46916-932e-4217-9e9d-f09e56e112ff";

const instance = axios.create({
  baseURL: `${BASE_URL}?uuid=${UUID}`,
});

export default instance;