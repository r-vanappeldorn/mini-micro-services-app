import CreatePostForm from "@/components/CreatePostForm";
import PostList from "@/components/PostList";

export default function Home() {
    return (
        <div className="m-10 flex">
            <CreatePostForm />
            <hr className="my-5 block border-0 border-t-2 border-gray-600" />
            <PostList />
        </div>
    );
}
