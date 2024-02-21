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
        comments: {
            id: string;
            content: string;
        }[];
    };
}
