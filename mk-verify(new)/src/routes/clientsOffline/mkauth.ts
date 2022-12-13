import mkauthJWT from "../../auth/mkauthJWT";
import axios from "axios";
import { mkauthClient, mkauthClientWithDate } from "../../types/clientsOffline";

async function mkAuth(): Promise<mkauthClientWithDate[]> {
  const token = await mkauthJWT();
  const { data } = await axios("http://172.31.255.2/api/cliente/listagem", {
    headers: {
      "Accept-Encoding": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const date = new Date().toJSON();
  const activeClients: mkauthClientWithDate[] = data.clientes.filter((x: mkauthClient) => x.bloqueado === "nao" && x.cli_ativado === "s")
  const smallName = activeClients.map(x => {
      return {...x, date}
  })
  return smallName
}

export default mkAuth
