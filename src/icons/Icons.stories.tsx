import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

import { SearchIcon } from ".";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: "Example/Icons",
  component: SearchIcon,
} as Meta;

export const TextKorean: React.VFC = () => (
  <Container>
    <SearchIcon />
  </Container>
);
