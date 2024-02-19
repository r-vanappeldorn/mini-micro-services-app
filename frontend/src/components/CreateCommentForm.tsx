import { Dispatch, FormEvent, useState } from "react";
import axios from "axios";

import Input from "./Input";
import SendIcon from "@/icons/SendIcon";
import { Comments } from "@/types/comments";

type CreateCommentFormProps = {
    postId: string;
    setCommentsList: Dispatch<Comments>;
};

export function CreateCommentForm({
    postId,
    setCommentsList,
}: CreateCommentFormProps) {
    const [comment, setComment] = useState("");

    const createComment = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const { data: newCommentsList } = await axios.post<Comments>(
                `http://localhost:4001/posts/${postId}/comments`,
                {
                    id: postId,
                    content: comment,
                },
            );

            // Set comments list to new list and clear input.
            setCommentsList(newCommentsList);
            setComment("");
        } catch (err) {
            throw console.error(err);
        }
    };

    return (
        <form onSubmit={createComment} className="my-2 flex overflow-hidden">
            <Input
                isTextarea
                id="create-comment"
                value={comment}
                setValue={setComment}
            />
            <button
                type="submit"
                className="ml-2 flex flex-grow-0 self-start rounded-sm bg-purple-600 px-2 py-1 text-sm text-gray-200 shadow transition duration-200 ease-in-out hover:bg-purple-700"
            >
                <SendIcon height={18} width={18} className="stroke-gray-200" />
            </button>
        </form>
    );
}
