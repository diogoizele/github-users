import { FC } from "react";

import GithubProvider from "./providers/github/githubProvider/githubProvider/githubProvider.tsx/githubProvider";

import Layout from "./layout/layout";
import Profile from "./containers/profile/profile";
import Repositories from "./containers/repositories/repositories";

const App: FC = () => {
  return (
    <GithubProvider>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </GithubProvider>
  );
};
export default App;
