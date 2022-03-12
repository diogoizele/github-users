import { FC, useCallback, useEffect, useState } from "react";

import githubContext from "../../../githubContext/githubContext";

import fetchUser, { FetchUserProps } from "../../../../../api/fetchUser";
import fetchRepos, { FetchRepoProps } from "../../../../../api/fetchRespos";

import type { GitHubContextScheema } from "../../../githubContext/githubContext";

const GithubProvider: FC = ({ children }) => {
  const [user, updateUser] = useState<FetchUserProps | null>(null);
  const [repositories, updateRepositories] = useState<FetchRepoProps[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const setUser = useCallback(
    async (name: string) => {
      setIsLoading(true);
      const reqUser = await fetchUser(name);

      updateUser(reqUser);
      setIsLoading(false);

      if (user) {
        if ("login" in user == false) {
          updateUser(null);
        }
      }
    },
    [updateUser, fetchUser]
  );

  const searchNewUser = useCallback(() => {
    updateUser(null);
  }, [updateUser]);

  useEffect(() => {
    if (user) {
      const getRepos = async () => {
        const reqRepos = await fetchRepos(user.login);

        updateRepositories(reqRepos);
      };

      getRepos();
    }
  }, [user]);

  const context: GitHubContextScheema = {
    repositories,
    user,
    loading: isLoading,
    setUser,
    searchNewUser,
  };

  return (
    <githubContext.Provider value={context}>{children}</githubContext.Provider>
  );
};

export default GithubProvider;
