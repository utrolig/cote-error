import cote from "cote";
import { COMMAND_RESPONDER_KEY } from "./keys";

(async () => {
  const responder = new cote.Responder({
    name: "Command Responder",
    key: COMMAND_RESPONDER_KEY,
  });
  responder.on("setData", async (event: { type: string; payload: any }) => {
    const payload = event && event.payload;
    return { msg: "this is the data returned from setData", payload };
  });
})();
