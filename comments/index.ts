import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

import { CommentsByPosts } from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPosts: CommentsByPosts = {};

app.get("/posts/:id/comments", (req, res) => {
    const { id } = req.params;

    const comments = commentsByPosts[id] || [];
    res.send(comments);
});

app.post("/posts/:id/comments", (req, res) => {
    // Create fake id. Would not use this method in a real project.
    const commentId = randomBytes(4).toString("hex");

    const { content } = req.body;
    const { id: postId } = req.params;

    // Find commentsByPosts or create empty array to push comment to.
    const comments = commentsByPosts[postId] || [];
    const newComment = { id: commentId, content };
    comments.push(newComment);

    // Overwrite old comments.
    commentsByPosts[postId] = comments;

    // Emit commentCreated event to event bus.
    fetch("http://localhost:4005/events", {
        method: "POST",
        body: JSON.stringify({
            type: "commentCreated",
            data: { ...newComment, postId },
        }),
    });

    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log("Listening on port 4001");
});
