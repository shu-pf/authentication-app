import { TextButton } from "../../../../ui";
import { Spacer } from "../../../../util";
import * as Styled from "./index.style";

/**
 * 見出しレイアウトです。戻るボタンを表示します。
 */
export const BackTitle: React.FC = () => {
  return (
    <Styled.TitleContainer>
      <Spacer height="48px" />
      <TextButton iconName="AngleLeft">Back</TextButton>
      <Spacer height="30px" />
    </Styled.TitleContainer>
  );
};
