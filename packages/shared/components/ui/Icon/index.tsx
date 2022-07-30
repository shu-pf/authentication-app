import React from "react";
// Material Design icons
// https://react-icons.github.io/react-icons/icons?name=md
import { MdEmail, MdVpnKey } from "react-icons/md";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Icons = {
  Email: MdEmail,
  Password: MdVpnKey,
  Google: FaGoogle,
  Facebook: FaFacebookSquare,
  Twitter: FaTwitter,
  Github: FaGithub,
  AngleDown: FaAngleDown,
  AngleUp: FaAngleUp,
} as const;

export interface IconProps {
  /**
   * アイコンの種類
   */
  name: keyof typeof Icons;
  /**
   * 表示色
   */
  color?: IconContext["color"];
  /**
   * サイズ
   */
  size?: IconContext["size"];
}

/**
 * アイコンコンポーネント
 */
export const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const Icon = Icons[name];

  return (
    <IconContext.Provider value={{ color, size }}>
      <Icon />
    </IconContext.Provider>
  );
};
