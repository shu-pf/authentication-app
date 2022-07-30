import styled from "@emotion/styled";

/**
 * 仕切り線を作るコンポーネント
 */
export const Divider = styled.div(({ theme }) => ({
  height: "1px",
  backgroundColor: theme.colors.separateContents,
}));
