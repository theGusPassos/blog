export interface Comment {
  user: User;
  created: Date;
  updated: Date;
  body: string;
}

export interface User {
  login: string;
  avatarUrl: string;
}
