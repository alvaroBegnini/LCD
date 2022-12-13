import { Request, Response, Router } from "express";
import expressAuth from "./auth/expressAuth";
import login from "./auth/login";
import clientsOffline from "./routes/clientsOffline";
import setSilence from "./routes/silence";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/login", (req, res) => {
  const username = req.body?.username;
  const password = req.body?.password;

  if (!username || !password) return res.sendStatus(403);
  const jwt = login(username, password);

  if (jwt) return res.json(jwt);
  res.sendStatus(403);
});

router.get(
  "/clientes/offline",
  expressAuth,
  async (req: Request, res: Response) => {
    const offlineClients = await clientsOffline();
    if (offlineClients) return res.json(offlineClients);
    return res.json(null);
  }
);

router.post("/silence", expressAuth, (req, res) => {
  try {
    const { client, action } = req.body;
    setSilence(action, client);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.get("/help", expressAuth, (req, res) => {
  const help = {
    "/help": {
      Method: "GET",
      Params: [],
      description: "Display all routes available",
    },
    "/clientes/offline": {
      Method: "GET",
      Params: [],
      description: "Returns all offline clients",
    },
    login: {
      Method: "POST",
      Params: ["username", "password"],
      description: "returns a JWT if username and password are correct",
    },
  };
  return res.json(help);
});

export default router;
