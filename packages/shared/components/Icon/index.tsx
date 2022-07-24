import React from "react";
import { MdEmail } from "react-icons/md";

const Icons = {
  MdEmail,
} as const;

export interface IconProps {
  /**
   * アイコンの種類
   */
  name: keyof typeof Icons;
}

/**
 * アイコンコンポーネント
 */
export const Icon: React.FC<IconProps> = ({ name }) => {
  const Icon = Icons[name];

  return (
    <>
      <Icon />
    </>
  );
};
