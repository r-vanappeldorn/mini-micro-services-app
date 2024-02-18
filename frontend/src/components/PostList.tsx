"use client";

import axios from "axios";

import { Posts } from "@/types/posts";
import { PostContext } from "@/contexts/posts-context";
import Post from "./Post";
import { useContext, useEffect } from "react";

export default function PostList() {
    const { posts, setPosts } = useContext(PostContext);

    useEffect(() => {
        async function getPosts() {
            try {
                const { data: fetchedPosts } = await axios.get<Posts>(
                    "http://localhost:4000/posts",
                );
                setPosts(fetchedPosts);
            } catch (err) {
                throw console.error(err);
            }
        }

        getPosts();
    }, []);

    return (
        <section className="mt-5 flex w-full max-w-[500px] flex-col rounded-sm bg-gray-900 p-5">
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </section>
    );
}
