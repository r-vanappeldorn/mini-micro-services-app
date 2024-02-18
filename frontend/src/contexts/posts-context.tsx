import { Dispatch, ReactNode, createContext, useState } from "react";
import { Posts } from "../types/posts";

type PostContextContent = {
    posts: Posts;
    setPosts: Dispatch<Posts>;
};

const initialState = {
    posts: [],
    setPosts: () => [],
};

export const PostContext = createContext<PostContextContent>(initialState);

export default function PostContextProvider({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    const [posts, setPosts] = useState<Posts>([]);

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
}
