export type FetchRepoProps = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  langugage: string;
};

const fetchRepos = async (user: string): Promise<FetchRepoProps[]> => {
  const raw = await fetch(`https://api.github.com/users/${user}/repos`);

  const res = await raw.json();

  return res as FetchRepoProps[];
};

export default fetchRepos;
