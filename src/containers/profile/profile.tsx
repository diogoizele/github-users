import { FC } from "react";

import useGithub from "../../hooks/useGithub";

import Avatar from "../../components/avatar/avatar";
import { css } from "@emotion/css";
import Button from "../../components/button/button";

const Profile: FC = () => {
  const { user, searchNewUser } = useGithub();

  return (
    <div className={profile}>
      <Avatar alt={`Avatar do usuário ${user?.name}`} url={user?.avatar_url!} />
      <div className={userInfo}>
        <h1>{user?.name}</h1>
        <h3>@{user?.login}</h3>
        <h4>{user?.bio}</h4>
        <p>{user?.location}</p>
        <div className={interactions}>
          <span>
            Seguidores: <strong>{user?.followers}</strong>
          </span>
          <span>
            Seguindo: <strong>{user?.following}</strong>
          </span>
        </div>
        <Button onClick={searchNewUser}>Buscar Novo Usuário</Button>
      </div>
    </div>
  );
};

const profile = css`
  min-height: 17rem;
  width: 80%;

  border-radius: 3px;
  background-color: #c3c3c3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #3f3f3f;
  padding: 1rem;
`;

const userInfo = css`
  flex: 1;
  height: 90%;

  box-sizing: border-box;

  margin: 1rem;
  padding: 1rem;

  background-color: #afafaf;
  border-radius: 3px;

  position: relative;
`;

const interactions = css`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;

  background-color: #444;
  color: white;
  padding: 0.3rem;

  border-radius: 3px;
`;

const searchNewUser = css`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  padding: 0.3rem 1rem;
`;

export default Profile;
