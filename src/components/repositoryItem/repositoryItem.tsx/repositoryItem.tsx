import { css } from "@emotion/css";
import { FC, useMemo } from "react";
import { FetchRepoProps } from "../../../api/fetchRespos";

const RepositoryItem: FC<FetchRepoProps> = ({
  description = "Sem descrição",
  html_url,
  id,
  langugage,
  name,
}) => {
  const generateRandomColor = useMemo((): string => {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 4) {
      return "#474973";
    }
    if (randomNumber >= 4 && randomNumber < 8) {
      return "#161B33";
    }

    return "#0D0C1D";
  }, []);

  return (
    <div className={repository(generateRandomColor)}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{langugage}</p>
      <a className={link} target="_blank" href={html_url}>
        Ver repositório
      </a>
    </div>
  );
};

const repository = (color: string) => css`
  box-shadow: 0 0 5px 1px #aaa;

  background-color: ${color};

  max-width: 15rem;
  min-height: 15rem;
  margin: 1rem 0.4rem;
  padding: 1rem;

  color: #f1f1f1;
`;

const link = css`
  text-decoration: none;
  padding: 0.3rem;
  background-color: #0e131f;

  color: white;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background-color: #0e133f;
  }
`;

export default RepositoryItem;
