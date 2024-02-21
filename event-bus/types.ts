import { Request } from "express";

export type EventReq = Request<Event>;

export interface Event {
    data: unknown;
    type: string;
}
