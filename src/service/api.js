import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "/", //backend api url
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
