import { useState } from "react";

import Input from "./Input";

export function CreateCommentForm() {
    const [comment, setComment] = useState("");

    return (
        <form className="flex overflow-hidden">
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
                Add
            </button>
        </form>
    );
}
