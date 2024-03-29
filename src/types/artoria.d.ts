export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
  id: number;
  username: string;
}

export interface PublishChannelRes {
  pageCtx: unknown;
  publishingCovers: string[];
  publishingContent: string;
}

export interface GenerateNewsletterRes {
  startTime: string;
  endTime: string;
  newsletterPageCtx: unknown;
}

export interface PublishNewsletterRes {
  targetNewsletterId: string;
}

export interface UserInfo {
  id: number;
  username: string;
}
