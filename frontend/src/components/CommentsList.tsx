import { Dispatch } from "react";

import { CreateCommentForm } from "./CreateCommentForm";
import { CommentStatuses, Comments } from "@/types/comments";

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
    const renderContent = (status: CommentStatuses, content: string) => {
        switch (status) {
            case CommentStatuses.PENDING: {
                return "Comment review pending";
            }
            case CommentStatuses.REJECTED: {
                return "Comment was rejected";
            }
            default:
                return content;
        }
    };

    return (
        <div
            className={`grid ${showComments ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} mb-1 transition-grid-rows`}
        >
            <div className="overflow-hidden">
                <ul className="list-disc text-gray-400">
                    {commentsList.map(({ status, content, id }) => (
                        <li className=" text-sm " key={id}>
                            {renderContent(status, content)}
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
