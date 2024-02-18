"use client";

import { FormEvent, useContext, useState } from "react";

import { PostContext } from "@/contexts/posts-context";
import { Post } from "@/types/posts";
import axios from "axios";

export default function CreatePostForm() {
    const [title, setTitle] = useState("");
    const { posts, setPosts } = useContext(PostContext);

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data: newPost } = await axios.post<Post>(
                "http://localhost:4000/posts",
                {
                    title,
                },
            );
            setTitle("");
            setPosts([...posts, newPost]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="flex max-w-[350px] flex-col rounded-sm bg-gray-900 p-8 shadow">
            <h2 className="mb-5 text-xl font-bold text-gray-100">
                Create <span className="text-purple-300">post</span>
            </h2>
            <form onSubmit={createPost}>
                <label
                    htmlFor="create-post"
                    className="mb-2 block text-gray-400"
                >
                    Title:
                </label>
                <input
                    type="text"
                    id="create-post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-5 w-full appearance-none rounded-sm border-2 border-gray-700 bg-[rgb(12,17,28)] px-3 py-2 leading-tight text-gray-200 shadow focus:border-gray-600 focus:outline-none"
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
