import express from "express";
import { listFiles } from "./files.js";

const server = express();

// cors
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

server.get("/arquivos", async (req, res) => {
  const files = await listFiles();

  res.json(files);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
