import axios from "axios";
import { SetStateAction } from "react";

async function handleLogin(formData: any) {
  try {
    const hostname = window.location.hostname;
    const port =
      window.location.port == "80"
        ? "3030"
        : window.location.port === "3000"
        ? "3030"
        : "1011";
    const { data } = await axios.post(`http://${hostname}:${port}/login`, {
      username: formData.login,
      password: formData.password,
    });
    return data.token
  } catch (err: any) {
    return false
  }
};

export default handleLogin