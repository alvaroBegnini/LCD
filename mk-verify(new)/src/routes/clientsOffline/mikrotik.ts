import { RouterOSClient } from "routeros-client";
import { config } from "dotenv";
import { mikrotikClient } from "../../types/clientsOffline";
config();

const api = new RouterOSClient({
  host: "10.10.10.9",
  user: process.env.USERNAME_API,
  password: process.env.PASSWORD_API,
  keepalive: true,
});

async function mikrotik(): Promise<String[]> {
    const client = api.isConnected() ? api.api() : await api.connect();
    const ppp = await client.menu("/ppp active").getAll();
    const pppLowerCase = ppp.map((x: mikrotikClient) => {
      return x.name.toLowerCase().replace(/[ ]/g, "");
    });
    return pppLowerCase;
}

export default mikrotik;
