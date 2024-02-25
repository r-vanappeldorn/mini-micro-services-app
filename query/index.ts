import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
    CommentWithPostId,
    EventReq,
    NewCommentCreatedEvent as NewCommentEvent,
    NewPostEvent,
    Event,
    Posts,
} from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts: Posts = {};

app.get("/posts", (req, res) => {
    res.send(Object.values(posts));
});

const handlePostCreated = (newPostEventData: NewPostEvent) => {
    const { id, title } = newPostEventData;

    // Add new post to posts object and add empty array of comments to post.
    posts[id] = { id, title, comments: [] };
};

const handleCommentCreated = (newCommentEventData: NewCommentEvent) => {
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

const handleEvents = (type: string, data: unknown) => {
    switch (type) {
        case "postCreated":
            handlePostCreated(data as NewPostEvent);
            break;

        case "commentCreated":
            handleCommentCreated(data as NewCommentEvent);
            break;
        case "commentUpdated":
            handleCommentUpdated(data as CommentWithPostId);
            break;
    }
};

app.post("/events", (req: EventReq, res) => {
    const { type, data } = req.body;
    handleEvents(type, data);

    res.sendStatus(200);
});

app.listen(4002, async () => {
    console.log("query service is running on PORT: 4002");

    // On start up get al old events.
    const events = await fetch("http://events-bus-srv:4005/events", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "get",
    }).then((res) => res.json() as Promise<Event[]>);

    events.forEach(({ type, data }) => handleEvents(type, data));
});
