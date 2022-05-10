export type User = {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  company: string;
  name: string;
  location: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: Date;
};
