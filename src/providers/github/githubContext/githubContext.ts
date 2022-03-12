import { createContext } from "react";

import type { FetchRepoProps } from "../../../api/fetchRespos";
import type { FetchUserProps } from "../../../api/fetchUser";

export type GitHubContextScheema = {
  user: FetchUserProps | null;
  repositories: FetchRepoProps[] | null;
  loading: boolean;
  setUser: (name: string) => void;
  searchNewUser: () => void;
};

const githubContext = createContext<GitHubContextScheema>(
  {} as GitHubContextScheema
);

export default githubContext;
