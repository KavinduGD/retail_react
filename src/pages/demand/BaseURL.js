import axios from "axios";

const demandAxios = axios.create({
  baseURL: "https://demandretail.onrender.com/api/",
});

export default demandAxios;
