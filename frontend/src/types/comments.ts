export type Comment = {
    id: string;
    content: string;
    postId: string;
    status: CommentStatuses
};

export enum CommentStatuses {
    "PENDING" = "pending",
    "APPROVED" = "approved",
    "REJECTED" = "rejected",
}

export type Comments = Comment[];
