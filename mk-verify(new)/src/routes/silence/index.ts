import fs from "fs"

function setSilence(silenceIt: boolean, client: string) {
  if(silenceIt){
    const silenced = JSON.parse(fs.readFileSync("./src/files/silenced.json", {encoding: "utf8"}))
    const newSilencedArray = silenced.includes(client) ? [...silenced] : [...silenced, client]
    fs.writeFileSync("./src/files/silenced.json", JSON.stringify(newSilencedArray),{encoding: "utf8"})
  }
  if(!silenceIt){
    const silenced = JSON.parse(fs.readFileSync("./src/files/silenced.json", {encoding: "utf8"}))
    const newSilencedArray = silenced.filter((x: string) => x !== client)
    fs.writeFileSync("./src/files/silenced.json", JSON.stringify(newSilencedArray),{encoding: "utf8"})
  }
}

export default setSilence