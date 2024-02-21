import { Request } from "express";

export type CreatePostReq = Request<{ title: string }>;

export type EventReq = Request<Event>;

export interface Posts {
    [key: string]: {
        id: string;
        title: string;
    };
}

export interface Event {
    data: unknown;
    type: string;
}
