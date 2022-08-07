import styled from "@emotion/styled";

export const Main = styled.main({
  padding: "30px 48px",
});

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.basePrimary,
  ...theme.typographies.h2,
}));

export const SubTitle = styled.p(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  ...theme.typographies.tableCaption,
}));

export const PhotoLabel = styled.p(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "18px",
  letterSpacing: "-0.035em",
  cursor: "pointer",
}));

export const IconWrapper = styled.div({
  cursor: "pointer",
});
