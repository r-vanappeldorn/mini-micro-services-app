import express from "express";
import { randomBytes } from "crypto"
import bodyParser from "body-parser"

import { CreatePostReq, Posts } from "./types";

const app = express()
app.use(bodyParser.json())

const posts: Posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req: CreatePostReq, res) => {
    // Create fake id. Would not use this method in a real project.
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    const newPost = {
        id,
        title
    }

    // Create new entry in posts object.
    posts[id] = newPost
    res.status(201).send(newPost)
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})