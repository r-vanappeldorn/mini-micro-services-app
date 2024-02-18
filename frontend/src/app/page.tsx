import CreatePostForm from "@/components/CreatePostForm";
import PostList from "@/components/PostList";

export default function Home() {
    return (
        <div className="mx-3 flex flex-col items-center">
            <CreatePostForm />
            <PostList />
        </div>
    );
}
