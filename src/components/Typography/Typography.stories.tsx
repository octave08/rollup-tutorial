import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

import { Typography } from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${Typography} ~ ${Typography} {
    margin-top: 4px;
  }
`;

export default {
  title: "Example/Typography",
  component: Typography,
} as Meta;

export const TextKorean: React.VFC = () => (
  <Container>
    <Typography fontSize={11}>다람쥐 헌 쳇바퀴 타고파</Typography>
    <Typography fontSize={11} fontWeight={500}>
      다람쥐 헌 쳇바퀴 타고파
    </Typography>
    <Typography fontSize={11} fontWeight={700}>
      다람쥐 헌 쳇바퀴 타고파
    </Typography>
    <br />
    <Typography fontSize={12}>다람쥐 헌 쳇바퀴에 타고파</Typography>
    <Typography fontSize={12} fontWeight={500}>
      다람쥐 헌 쳇바퀴에 타고파
    </Typography>
    <Typography fontSize={12} fontWeight={700}>
      다람쥐 헌 쳇바퀴에 타고파
    </Typography>
    <br />
    <Typography fontSize={13}>다람쥐 헌 쳇바퀴에 타고파</Typography>
    <Typography fontSize={13} fontWeight={500}>
      다람쥐 헌 쳇바퀴에 타고파
    </Typography>
    <Typography fontSize={13} fontWeight={700}>
      다람쥐 헌 쳇바퀴에 타고파
    </Typography>
  </Container>
);

export const TextEnglish: React.VFC = () => (
  <Container>
    <Typography fontSize={11}>I don't like Metropolis</Typography>
    <Typography fontSize={11} fontWeight={500}>
      I don't like Metropolis
    </Typography>
    <Typography fontSize={11} fontWeight={700}>
      I don't like Metropolis
    </Typography>
    <br />
    <Typography fontSize={12}>I don't like Metropolis</Typography>
    <Typography fontSize={12} fontWeight={500}>
      I don't like Metropolis
    </Typography>
    <Typography fontSize={12} fontWeight={700}>
      I don't like Metropolis
    </Typography>
    <br />
    <Typography fontSize={13}>I don't like Metropolis</Typography>
    <Typography fontSize={13} fontWeight={500}>
      I don't like Metropolis
    </Typography>
    <Typography fontSize={13} fontWeight={700}>
      I don't like Metropolis
    </Typography>
  </Container>
);
