"use client";

import { useState } from "react";

import CommentIcon from "@/icons/CommentIcon";
import { Post } from "@/types/posts";
import { CreateCommentForm } from "./CreateCommentForm";

export default function Post({ id, title }: Post) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div
            id={id}
            className="animate-fade-in mb-2 flex cursor-pointer flex-col border-b border-gray-700"
        >
            <h3 className="text-lg text-gray-200">{title}</h3>
            <div
                className={`grid ${showComments ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-grid-rows mb-1`}
            >
                <div className="overflow-hidden">
                    <p className=" text-sm text-gray-400">comment</p>
                    <CreateCommentForm />
                </div>
            </div>
            <button
                className="mb-2 flex"
                onClick={() => setShowComments(!showComments)}
            >
                <CommentIcon
                    height={15}
                    width={16}
                    className=" fill-gray-400"
                />
                <span className="ml-1 text-[11px] text-gray-400">2</span>
            </button>
        </div>
    );
}
