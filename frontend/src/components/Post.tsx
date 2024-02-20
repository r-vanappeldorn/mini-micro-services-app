"use client";

import { useEffect, useState } from "react";

import CommentIcon from "@/icons/CommentIcon";
import { Post } from "@/types/posts";
import axios from "axios";
import { Comments } from "@/types/comments";
import CommentsList from "./CommentsList";

export default function Post({ id, title }: Post) {
    const [showComments, setShowComments] = useState(false);
    const [commentsList, setCommentsList] = useState<Comments>([]);

    useEffect(() => {
        axios
            .get(`http://localhost:4001/posts/${id}/comments`)
            .then(({ data: fetchedCommentsList }) => {
                setCommentsList(fetchedCommentsList);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div
            id={id}
            className="animate-fade-in mb-2 flex cursor-pointer flex-col border-b border-gray-700"
        >
            <h3 className="text-lg text-gray-200">{title}</h3>
            <CommentsList
                postId={id}
                setCommentsList={setCommentsList}
                commentsList={commentsList}
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
