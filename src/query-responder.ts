import cote from "cote";
import { QUERY_RESPONDER_KEY } from "./keys";

(async () => {
  const responder = new cote.Responder({
    name: "Query Responder",
    key: QUERY_RESPONDER_KEY,
  });
  responder.on("getData", async () => {
    return "this is the data returned from getData";
  });
})();
