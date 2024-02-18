import { Post } from "@/types/posts";

export default function Post({ id, title }: Post) {
    return (
        <div id={id} className="border-b border-gray-700">
            <h3 className="text-lg font-medium text-gray-200">{title}</h3>
        </div>
    );
}
