import { createContext } from "react";

import type { GithubContextSchema } from "./githubContext.types";

const GithubContext = createContext<GithubContextSchema>(
  {} as GithubContextSchema
);

export default GithubContext;
