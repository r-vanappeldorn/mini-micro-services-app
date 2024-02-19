import { Dispatch } from "react";

import { CreateCommentForm } from "./CreateCommentForm";
import { Comments } from "@/types/comments";

type CommentsListProps = {
    commentsList: Comments;
    showComments: boolean;
    setCommentsList: Dispatch<Comments>;
    postId: string;
};

export default function CommentsList({
    commentsList,
    postId,
    showComments,
    setCommentsList,
}: CommentsListProps) {
    return (
        <div
            className={`grid ${showComments ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-grid-rows mb-1`}
        >
            <div className="overflow-hidden">
                <ul className="list-disc text-gray-400">
                    {commentsList.map(({ content, id }) => (
                        <li className=" text-sm " key={id}>
                            {content}
                        </li>
                    ))}
                </ul>
                <CreateCommentForm
                    postId={postId}
                    setCommentsList={setCommentsList}
                />
            </div>
        </div>
    );
}
