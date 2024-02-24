"use client";

import { useEffect, useState } from "react";

import CommentIcon from "@/icons/CommentIcon";
import { Post } from "@/types/posts";
import { Comments } from "@/types/comments";
import CommentsList from "./CommentsList";

export default function Post({ id, title, comments }: Post) {
    const [showComments, setShowComments] = useState(false);
    const [commentsList, setCommentsList] = useState<Comments>([]);

    useEffect(() => {
        setCommentsList([...comments]);
    }, []);

    return (
        <div
            id={id}
            className="mb-2 flex animate-fade-in cursor-pointer flex-col border-b border-gray-700"
        >
            <h3 className="text-lg text-gray-200">{title}</h3>
            <CommentsList
                postId={id}
                setCommentsList={setCommentsList}
                commentsList={comments}
                showComments={showComments}
            />
            <button
                className="mb-2 flex"
                onClick={() => setShowComments(!showComments)}
            >
                <CommentIcon
                    height={17}
                    width={18}
                    className=" fill-gray-400"
                />
                <span className="ml-1 text-[12px] text-gray-400">
                    {commentsList.length}
                </span>
            </button>
        </div>
    );
}
