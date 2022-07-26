import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from ".";

const buttonStyles = (theme: Theme) => ({
  primary: {
    backgroundColor: theme.colors.mainPrimary,
    color: theme.colors.baseWhite,
    ...theme.typographies.buttonBold,
  },
  secondary: {
    border: `1px solid ${theme.colors.baseQuaternary}`,
    color: theme.colors.baseQuaternary,
    ...theme.typographies.buttonRegular,
  },
});

export const Button = styled.button<Pick<ButtonProps, "variant" | "width">>(
  ({ variant = "primary", width, theme }) => ({
    padding: "7.5px",
    borderRadius: "8px",
    transition: "0.2s",
    width,
    ...buttonStyles(theme)[variant],
    ":active": {
      opacity: 0.8,
    },
  })
);
