import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { EventReq } from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

const handlePostCreated = (newPostEventData: { id: string; title: string }) => {
    const { id, title } = newPostEventData;

    // Add new post to posts object and add empty array of comments to post.
    posts[id] = { id, title, comments: [] };
};

const handleCommentCreated = (newCommentEventData: {
    id: string;
    content: string;
    postId: string;
}) => {
    const { postId, id, content } = newCommentEventData;

    // Find post and add new comment to comments array.
    const post = posts[postId];
    post.comments.push({ id, content });
};

app.post("/events", (req: EventReq, res) => {
    const { type, data } = req.body;

    switch (type) {
        case "postCreated":
            handlePostCreated(data);
            break;

        case "commentCreated":
            handleCommentCreated(data);
            break;
    }

    res.send(200);
});

app.listen(4002, () => {
    console.log("query service is running on PORT: 4002");
});
