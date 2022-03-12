import { css } from "@emotion/css";
import { FC } from "react";

import RepositoryItem from "../../components/repositoryItem/repositoryItem.tsx/repositoryItem";
import useGithub from "../../hooks/useGithub";

const Repositories: FC = () => {
  const { repositories: repos } = useGithub();

  return (
    <div className={repositories}>
      {repos?.map(({ name, description, html_url, id, langugage }) => (
        <RepositoryItem
          name={name}
          description={description}
          key={id}
          html_url={html_url}
          id={id}
          langugage={langugage}
        />
      ))}
    </div>
  );
};

const repositories = css`
  margin-top: 2rem;
  min-height: 17rem;
  width: 80%;

  border-radius: 3px;
  background-color: #c3c3c3;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  color: #3f3f3f;
  padding: 1rem;
`;
export default Repositories;
