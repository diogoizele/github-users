import { useMemo, useState } from "react";

import GithubContext from "../githubContext/githubContext";

import type { GithubProviderProps } from "./githubProvider.types";
import type { GithubContextSchema } from "context/github/githubContext/githubContext.types";
import type { User } from "shared/user.types";
import type { Repository } from "shared/repository.types";

function GithubProvider({ children }: GithubProviderProps) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [repositories, setRepositories] = useState<Repository[]>();

  const _githubContext = useMemo(
    (): GithubContextSchema => ({
      currentUser,
      repositories,
    }),
    [currentUser, repositories]
  );

  return (
    <GithubContext.Provider value={_githubContext}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
