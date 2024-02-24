import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { CommentWithPostId, EventReq, Posts } from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts: Posts = {};

app.get("/posts", (req, res) => {
    res.send(Object.values(posts));
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
    status: "approved" | "rejected" | "pending";
}) => {
    const { postId, id, content, status } = newCommentEventData;

    // Find post and add new comment to comments array.
    const post = posts[postId];
    post.comments.push({ id, content, status });
};

const handleCommentUpdated = ({
    postId,
    id,
    content,
    status,
}: CommentWithPostId) => {
    // Find index of comment.
    const commentIndex = posts[postId].comments.findIndex(
        (comment) => comment.id === id
    );

    // Update comment props.
    posts[postId].comments[commentIndex] = { id, content, status };
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
        case "commentUpdated":
            handleCommentUpdated(data);
            break;
    }

    res.sendStatus(200);
});

app.listen(4002, () => {
    console.log("query service is running on PORT: 4002");
});
