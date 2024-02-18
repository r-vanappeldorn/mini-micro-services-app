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
                }
            );
            setTitle("");
            setPosts([...posts, newPost]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="p-8 max-w-[350px] shadow bg-gray-900 flex flex-col rounded-sm">
            <h2 className="font-bold text-xl text-gray-100 mb-5">
                Create <span className="text-purple-300">post</span>
            </h2>
            <form onSubmit={createPost}>
                <label
                    htmlFor="create-post"
                    className="block text-gray-400 mb-2"
                >
                    Title:
                </label>
                <input
                    type="text"
                    id="create-post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow bg-[rgb(12,17,28)] appearance-none border-2 border-gray-700 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-600 text-gray-200 mb-5"
                />
                <button
                    type="submit"
                    className="py-2 px-3 w-full bg-purple-600 text-sm font-medium shadow transition ease-in-out duration-200 rounded-sm text-gray-200 hover:bg-purple-700 "
                >
                    Create post
                </button>
            </form>
        </section>
    );
}
