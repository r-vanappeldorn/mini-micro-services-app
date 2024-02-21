import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(4002, () => {
    console.log("query service is running on PORT: 4002");
});
