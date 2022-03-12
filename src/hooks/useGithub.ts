import { useContext } from "react";

import githubContext from "../providers/github/githubContext/githubContext";

const useGithub = () => {
  const context = useContext(githubContext);

  if (!context) {
    console.warn("Você deve estár dentro de um <GithubProvier/>");
  }

  return context;
};

export default useGithub;
