import express, { application } from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
import cors from "cors";
import router from "./routes";
import socketAuth from "./auth/socketAuth";
import { mkauthClient } from "./types/clientsOffline";
import findClientsOffline from "./routes/clientsOffline";

const port = 3030;
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());
app.use(router);

io.use((socket, next) => {
  if (socketAuth(socket.handshake.auth.token)) {
    next();
  } else {
    next(new Error("invalid"));
  }
});

let offlineClients: any

async function interval() {
  offlineClients = await findClientsOffline();
  interval()
}

interval().then(() => {
  io.on("connection", async (socket) => {
    function handleChange(clients: mkauthClient[] = []): any {
      if (clients.length !== offlineClients.length) {
        socket.send(JSON.stringify(offlineClients));
        return handleChange(offlineClients);
      }
      for (let i = 0; i < clients.length; i++) {
        if (clients[i] !== offlineClients[i]) {
          socket.send(JSON.stringify(offlineClients));
          return handleChange(offlineClients);
        }
      }
      setTimeout(handleChange, 300);
    }

    handleChange();
  });
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
