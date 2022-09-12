import { createServer } from "http";
import { config } from "dotenv";
import app from "./app";

config();

const PORT = process.env.PORT || "3000";
async function main() {
  const server = createServer(app);
  server.listen(PORT, () => console.log("Server listening on " + PORT));
}

main();
