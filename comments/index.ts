import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

import {
    CommentStatuses,
    CommentsByPosts,
    EventReq,
    CommentWithPostId,
} from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPosts: CommentsByPosts = {};

app.get("/posts/:postId/comments", (req, res) => {
    const { postId } = req.params;

    const comments = commentsByPosts[postId] || [];
    res.send(comments);
});

app.post("/posts/:postId/comments", (req, res) => {
    // Create fake id. Would not use this method in a real project.
    const commentId = randomBytes(4).toString("hex");

    const { content } = req.body;
    const { postId } = req.params;

    // Find commentsByPosts or create empty array to push comment to.
    const comments = commentsByPosts[postId] || [];
    const newComment = {
        id: commentId,
        content,
        status: CommentStatuses.PENDING,
    };
    comments.push(newComment);

    // Overwrite old comments.
    commentsByPosts[postId] = comments;

    // Emit commentCreated event to event bus.
    fetch("http://localhost:4005/events", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            type: "commentCreated",
            data: { ...newComment, postId },
        }),
    });

    res.status(201).send(comments);
});

const reviewComment = (data: CommentWithPostId) => {
    const forbiddenWords = ["test", "test2"];
    const contentWords = data.content.split(" ");

    let updatedStatus = CommentStatuses.APPROVED;

    // Set status to rejected if content contains a forbidden word.
    forbiddenWords.forEach((word) => {
        if (contentWords.includes(word))
            updatedStatus = CommentStatuses.REJECTED;
    });

    // Set a time out of 10 seconds to fake latency and send commentUpdated event.
    setTimeout(() => {
        fetch("http://localhost:4005/events", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: "commentUpdated",
                data: { ...data, status: updatedStatus },
            }),
        });
    }, 10000);
};

const updateComment = ({ id, status, postId, content }: CommentWithPostId) => {
    // Find index of updated comment by id.
    const indexOfComment = commentsByPosts[postId].findIndex(
        (comment) => comment.id === id
    );

    commentsByPosts[postId][indexOfComment] = {
        id,
        status,
        content,
    };

    console.log(commentsByPosts);
};

app.post("/events", (req: EventReq, res) => {
    const { data, type } = req.body;
    switch (type) {
        case "commentCreated":
            reviewComment(data);
            break;
        case "commentUpdated":
            updateComment(data);
            break;
    }

    res.status(200);
});

app.listen(4001, () => {
    console.log("Listening on port 4001");
});
