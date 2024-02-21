import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { EventReq } from "./types";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {});

app.post("/events", (req: EventReq, res) => {
    const { type } = req.body;

    switch (type) {
        case "postCreated":
            break;
        case "commentCreated":
            break;
        default:
            console.error(`no implementation for event type: ${type}`);
    }
});

app.listen(4002, () => {
    console.log("query service is running on PORT: 4002");
});
