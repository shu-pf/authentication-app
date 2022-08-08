import { Spacer } from "../../../../util";
import * as Styled from "./index.style";

interface AuthLayoutProps {
  title: string;
  subTitle: string;
}

/**
 * 見出しレイアウトです。タイトルとサブタイトルを設定出来ます。
 */
export const DefaultTitle = ({ title, subTitle }: AuthLayoutProps) => {
  return (
    <Styled.TitleContainer>
      <Spacer height="40px" />
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      <Spacer height="44px" />
    </Styled.TitleContainer>
  );
};
