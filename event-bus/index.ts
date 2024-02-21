import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
    const event = req.body;

    fetch("http://localhost:4000/events", {
        method: "POST",
        body: JSON.stringify(event),
    });
    fetch("http://localhost:4001/events", {
        method: "POST",
        body: JSON.stringify(event),
    });
    fetch("http://localhost:4002/events", {
        method: "POST",
        body: JSON.stringify(event),
    });

    res.send({ status: "OK" });
});

app.listen(4005, () => {
    console.log("event bus is running on PORT: 4005");
});
