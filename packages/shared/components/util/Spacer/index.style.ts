import styled from "@emotion/styled";
import { SpacerProps } from ".";

export const Box = styled.div<Pick<SpacerProps, "width" | "height">>(
  ({ width, height }) => ({
    width,
    height,
  })
);
