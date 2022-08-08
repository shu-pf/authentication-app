import styled from "@emotion/styled";

export const TitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled.h1(({ theme }) => ({
  ...theme.typographies.h1,
}));

export const SubTitle = styled.h2(({ theme }) => ({
  ...theme.typographies.subTitle,
}));
