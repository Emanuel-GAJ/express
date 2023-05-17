import express from "express";
import { listFiles } from "./files.js";

const server = express();

server.get('/hello', (req,res) => {
    res.send('Hello World');

});

server.get('/files', async (req, res) => {
    const files = await listFiles();

    res.json(files);
})

server.listen(3001, () => {
    console.log('Server is listening on port 3001');
})