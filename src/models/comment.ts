export interface Comment {
  id: number;
  user: User;
  created_at: Date;
  updated_at: Date;
  body: string;
}

export interface User {
  login: string;
  avatar_url: string;
}
