import { Post } from "@/types/posts";

export default function Post({ id, title }: Post) {
    return (
        <div id={id} className="m-5 border-b border-gray-700">
            <h3 className="font-medium text-lg text-gray-200">{title}</h3>
        </div>
    );
}
