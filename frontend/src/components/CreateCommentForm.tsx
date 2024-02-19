import { useState } from "react";

import Input from "./Input";

export function CreateCommentForm() {
    const [comment, setComment] = useState("");

    return (
        <form className="overflow-hidden">
            <Input
                isTextarea
                id="create-comment"
                value={comment}
                setValue={setComment}
            />
        </form>
    );
}
