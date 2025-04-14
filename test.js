import express from "express";
import axios from "axios";
const runExpress = (express, axios) => {
  eval(`
    const app = express();

    app.get("/", async (req, res) => {
  const response = await axios.get("https://api.github.com/repos/vercel/next.js");
      res.send(response.data);
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("Server running on http://localhost:" + PORT);
    });
  `);
};

runExpress(express, axios);
