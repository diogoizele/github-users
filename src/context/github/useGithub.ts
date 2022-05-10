import { useContext } from "react";

import GithubContext from "context/github/githubContext/githubContext";

const useGithub = () => {
  const context = useContext(GithubContext);

  if (!context) {
    console.warn("Você deve estár dentro de um <GithubProvier/>");
    throw new Error("Você deve estár dentro de um <GithubProvier/>");
  }

  return context;
};

export default useGithub;
