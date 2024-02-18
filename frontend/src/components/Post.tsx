"use client";

import { useState } from "react";

import CommentIcon from "@/icons/CommentIcon";
import { Post } from "@/types/posts";

export default function Post({ id, title }: Post) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div id={id} className="mb-2 flex flex-col border-b border-gray-700">
            <h3 className="mb-2 text-lg text-gray-200">{title}</h3>
            <div className={showComments ? undefined : "hidden"}>comment</div>
            <div className="mb-2 flex">
                <CommentIcon
                    onClick={() => setShowComments(!showComments)}
                    height={15}
                    width={16}
                    className=" fill-gray-400"
                />
                <span className="ml-1 text-[11px] text-gray-400">2</span>
            </div>
        </div>
    );
}
