import * as express from "express";
import { UserRouter, CommentRouter, PostRouter, AuthRouter } from "./routers";

const app = express();
const routePrefix = "/api/v1";

// set up routers
app.get(`${routePrefix}`, (req, res) => {
  res.send("Hello, welcome to my blog");
});
app.use(`${routePrefix}/user`, (req, res) => {});
app.use(`${routePrefix}/comment`, (req, res) => {});
app.use(`${routePrefix}/post`, (req, res) => {});
app.use(`${routePrefix}/auth`, (req, res) => {});

// Error 500
app.use((err, req, res, next) => {});

// Error 404
app.use((req, res, next) => {});

export default app;
