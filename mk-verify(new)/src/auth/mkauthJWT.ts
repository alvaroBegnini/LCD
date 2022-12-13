import axios from "axios"
import https from "https"
import { config } from "dotenv";

config()
const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

async function mkauthJWT() {
  const username  = process.env.CLIENT_ID
  const password = process.env.CLIENT_SECRET
  if(!username || !password) throw Error("Client ID and Client Secret is required")
  const { data } = await instance("https://172.31.255.2/api", {auth: {
    username,
    password
  }})
  return data as string
}
export default mkauthJWT