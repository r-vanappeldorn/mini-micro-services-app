"use client";

import { FormEvent, useContext, useState } from "react";

import { PostContext } from "@/contexts/posts-context";
import { Post } from "@/types/posts";
import axios from "axios";
import Input from "./Input";

export default function CreatePostForm() {
    const [title, setTitle] = useState("");
    const { posts, setPosts } = useContext(PostContext);

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .post<{
                title: string;
                id: string;
            }>("http://mini-app.io/posts", {
                title,
            })
            .then(({ data: newPost }) => {
                setTitle("");
                setPosts([...posts, { ...newPost, comments: [] }]);
            })
            .catch((err) => console.error(err));
    };

    return (
        <section className="mt-5 flex w-full max-w-[500px] flex-col rounded-sm bg-gray-900 p-5 shadow">
            <h2 className="mb-2 text-xl font-bold text-gray-100">
                Create <span className="text-purple-300">post</span>
            </h2>
            <form onSubmit={createPost}>
                <Input
                    label="Title:"
                    id="create-post"
                    setValue={setTitle}
                    value={title}
                />
                <button
                    type="submit"
                    className="w-full rounded-sm bg-purple-600 px-3 py-2 text-sm font-medium text-gray-200 shadow transition duration-200 ease-in-out hover:bg-purple-700 "
                >
                    Create post
                </button>
            </form>
        </section>
    );
}
