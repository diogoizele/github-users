import { FC, RefObject, useCallback, useRef } from "react";
import { css } from "@emotion/css";

import useGithub from "../hooks/useGithub";
import Button from "../components/button/button";

const Layout: FC = ({ children }) => {
  const userNameRef = useRef() as RefObject<HTMLInputElement>;
  const { user, setUser, loading } = useGithub();

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const userName = userNameRef.current?.value;

      if (!userName) {
        return;
      }

      setUser(userNameRef.current.value);
    },
    [setUser, userNameRef]
  );

  return (
    <div className={layout}>
      {user?.login ? (
        <div className={content}>{children}</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {loading && <div>Carregando....</div>}
          <form onSubmit={handleFormSubmit} className={form}>
            <h1 className={title}>GitHub</h1>
            <input
              className={input}
              placeholder="Buscar usuário..."
              ref={userNameRef}
            />
            <Button type="submit">Buscar</Button>
          </form>
        </div>
      )}
    </div>
  );
};

const layout = css`
  padding: 1rem;
  width: 100%;
  min-height: 100vh;

  box-sizing: border-box;

  background-color: #3f3f3f;
  color: #fefefe;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const form = css`
  background-color: red;

  height: 10rem;
  padding: 1rem;

  background-color: #dfdfdf;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px #222;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const title = css`
  color: #444;
`;

const input = css`
  padding: 0.5rem 1rem;

  border: 2px solid #414141;

  border-radius: 5px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
  justify-content: space-between;
`;

export default Layout;
