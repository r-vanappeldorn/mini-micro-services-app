import { Request } from "express";

export type EventReq = Request<Event>;

export enum CommentStatuses {
    "PENDING" = "pending",
    "APPROVED" = "approved",
    "REJECTED" = "rejected",
}

export interface CommentsByPosts {
    [postId: string]: Comment[];
}

export interface Comment {
    id: string;
    content: string;
    status: CommentStatuses;
}

export interface ReviewComment extends Comment {
    postId: string;
}

export interface Event {
    data: unknown;
    type: string;
}
