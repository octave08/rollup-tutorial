import styled from "@emotion/styled";
import { typography, TypographyProps } from "styled-system";

export const Typography = styled.span<TypographyProps>`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  line-height: 146%;
  ${typography};
`;
