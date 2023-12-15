import axios from "axios";

const demandAxios = axios.create({
  baseURL: "https://spm-admin-kavindu.fly.dev/api/",
});

export default demandAxios;
