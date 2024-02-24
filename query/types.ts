import { Request } from "express";

export type EventReq = Request<Event>;

export interface CommentsByPosts {
    [key: string]: {
        id: string;
        content: string;
    }[];
}

export interface Event {
    data: unknown;
    type: string;
}

export interface Posts {
    [key: string]: {
        id: string;
        title: string;
        comments: Comment[];
    };
}

export interface Comment {
    id: string;
    content: string;
    status: "approved" | "rejected" | "pending";
}

export interface CommentWithPostId extends Comment {
    postId: string;
}

export type NewPostEvent = { id: string; title: string };

export type NewCommentCreatedEvent = {
    id: string;
    content: string;
    postId: string;
    status: "approved" | "rejected" | "pending";
};
