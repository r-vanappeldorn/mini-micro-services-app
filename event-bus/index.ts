import express from "express";
import bodyParser from "body-parser";
import { EventReq, Event } from "./types";

const app = express();
app.use(bodyParser.json());

const events: Event[] = [];

app.get("/events", (req, res) => {
    res.send(events);
});

app.post("/events", (req: EventReq, res) => {
    const event = req.body;

    // Post service.
    fetch("http://localhost:4000/events", {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(event),
    }).catch(() => console.error("failed to emit event too posts service"));
    // Comments service.
    fetch("http://localhost:4001/events", {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(event),
    }).catch(() => console.error("failed to emit event too comments service"));
    // Query service.
    fetch("http://localhost:4002/events", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(event),
    }).catch(() => console.error("failed to emit event too query service"));

    events.push(event);

    res.sendStatus(200);
});

app.listen(4005, () => {
    console.log("event bus is running on PORT: 4005");
});
