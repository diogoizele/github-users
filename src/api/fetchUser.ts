export type FetchUserProps = {
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

const fetchUser = async (user: string): Promise<FetchUserProps> => {
  const raw = await fetch(`https://api.github.com/users/${user}`);

  const res = await raw.json();

  return res as FetchUserProps;
};

export default fetchUser;
