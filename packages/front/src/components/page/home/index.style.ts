import styled from "@emotion/styled";

export const TitleContainer = styled.div({
  padding: "28px 49px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.basePrimary,
  ...theme.typographies.h2,
}));

export const SubTitle = styled.p(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  ...theme.typographies.tableCaption,
}));

export const Row = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "24px 50px",
}));

export const RowTitle = styled.div(({ theme }) => ({
  ...theme.typographies.tableCaption,
  color: theme.colors.separateContents,
  width: "231px",
}));

export const RowContent = styled.div(({ theme }) => ({
  color: theme.colors.baseSecondary,
}));
