import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cote from "cote";
import morgan from "morgan";
import { COMMAND_RESPONDER_KEY, QUERY_RESPONDER_KEY } from "./keys";

const commandRequester = new cote.Requester({
  name: "Command Requester",
  key: COMMAND_RESPONDER_KEY,
});
const queryRequester = new cote.Requester({
  name: "Query Requester",
  key: QUERY_RESPONDER_KEY,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  const data = await queryRequester.send({ type: "getData" });
  return res.send(data);
});

app.post("/", async (req, res) => {
  const { name, email } = req.body;
  const data = await commandRequester.send({
    type: "setData",
    payload: { name: name || "test", email: email || "mail@mail.com" },
  });
  return res.send(data);
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
