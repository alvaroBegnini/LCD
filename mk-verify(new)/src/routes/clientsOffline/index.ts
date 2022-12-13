import mkauth from "./mkauth"
import mikrotik from "./mikrotik"
import fs from "fs"

async function findClientsOffline() {
  const mkauthClients = await mkauth();
  const mikrotikClients = await mikrotik();
  const offline = mkauthClients.filter(x => !mikrotikClients.includes(x.login.toLowerCase().replace(/[ ]/g, "")));
  const silenced = JSON.parse(fs.readFileSync("./src/files/silenced.json", {encoding: "utf8"}))
  const notSilenced = offline.filter(x => !silenced.includes(x.nome))
  const silencedMkauth = offline.filter(x => silenced.includes(x.nome))
  return {notSilenced, silenced: silencedMkauth}
}

export default findClientsOffline