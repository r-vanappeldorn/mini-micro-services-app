import { Request } from "express"

export type CreatePostReq = Request<{ title: string }>

export interface Posts {
    [key: string]: {
        id: string
        title: string
    }
}