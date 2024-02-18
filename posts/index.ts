import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

import { CreatePostReq, Posts } from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts: Posts = {};

app.get("/posts", (req, res) => {
  res.send(Object.values(posts));
});

app.post("/posts", (req: CreatePostReq, res) => {
  // Create fake id. Would not use this method in a real project.
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  const newPost = {
    id,
    title,
  };

  // Create new entry in posts object.
  posts[id] = newPost;
  res.status(201).send(newPost);

  console.log("post created");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
