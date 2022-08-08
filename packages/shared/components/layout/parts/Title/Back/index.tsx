import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { TextButton } from "../../../../ui";
import { Spacer } from "../../../../util";
import * as Styled from "./index.style";

/**
 * 見出しレイアウトです。戻るボタンを表示します。
 */
export const BackTitle: React.FC = () => {
  const router = useRouter();

  const handleClick: MouseEventHandler = () => {
    router.back();
  };

  return (
    <Styled.TitleContainer>
      <Spacer height="48px" />
      <TextButton iconName="AngleLeft" onClick={handleClick}>
        Back
      </TextButton>
      <Spacer height="30px" />
    </Styled.TitleContainer>
  );
};
