import { styled } from 'styled-components';
// import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { container, logo } from '../../styles/variable';

// export const Logo = styled.div``;
// export const Inner = styled.div``;

// export const Typo = styled(Typography)`
//   font-size: 16rem;
// `;

export const Header = styled.header`
  ${container};
  z-index: 10;
`;

export const Logo = styled.h1`
  ${logo};
  font-size: 30rem;
  color: var(--gray130);
`;
