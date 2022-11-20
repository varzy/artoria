export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
}

export interface PublishChannelRes {
  pageCtx: unknown;
  publishingCovers: string[];
  publishingContent: string;
}
