import { Comments } from "./comments";

export interface Post {
    id: string;
    title: string;
    comments: Comments;
}

export type Posts = Array<Post>;
