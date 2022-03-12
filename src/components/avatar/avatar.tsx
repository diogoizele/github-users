import { css } from "@emotion/css";
import { FC } from "react";

interface AvatarProps {
  url: string | null;
  alt: string;
}

const Avatar: FC<AvatarProps> = ({
  alt,
  url = "https://i.stack.imgur.com/l60Hf.png",
}) => {
  return <img className={avatar} src={url!} alt={alt} />;
};

const avatar = css`
  width: 250px;
  height: 250px;
  object-fit: contain;

  border-radius: 50%;
`;

export default Avatar;
