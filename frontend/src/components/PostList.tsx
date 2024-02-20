"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Posts } from "@/types/posts";
import { PostContext } from "@/contexts/posts-context";
import Post from "./Post";
import Loader from "./Loader";

export default function PostList() {
    const { posts, setPosts } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    // Hide loader when animation is finished.
    const fadeOutLoader = () => {
        setTimeout(() => {
            setShowLoader(false);
        }, 500);
    };

    useEffect(() => {
        axios
            .get<Posts>("http://localhost:4000/posts")
            .then(({ data }) => {
                setPosts(data);
                setIsLoading(false);
                fadeOutLoader();
            })
            .catch((err) => console.error(err));
    }, []);

    const renderContent = () => {
        if (showLoader) {
            return (
                <Loader
                    // Add animate-fade-out className when posts are set.
                    className={!isLoading ? "animate-fade-out" : undefined}
                    message="Loading posts..."
                />
            );
        }

        // Return a empty posts if there are no posts in array.
        if (posts.length === 0) {
            return (
                <h2 className="animate-fade-in self-center text-center text-gray-200">
                    No posts created.
                </h2>
            );
        }

        return posts.map((post) => <Post key={post.id} {...post} />);
    };

    return (
        <section
            className={`transition-max-height mt-5 grid min-h-[110px] w-full ${showLoader ? "max-h-[130px]" : "max-h-[2000px]"} max-w-[500px] grid-rows-[1fr] overflow-hidden rounded-sm bg-gray-900 p-5 duration-[1500ms] ease-in-out`}
        >
            {renderContent()}
        </section>
    );
}
