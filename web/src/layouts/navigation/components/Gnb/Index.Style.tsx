import { styled } from 'styled-components';
import m from '@emotion/styled';
import { Button } from '@mui/material';

export const GnbList = m(Button)`
  display: flex;
  font-size: 14rem;
  height: 36rem;
  line-height: 36rem;
  border-radius: 6rem;
  padding: 0 12rem;
  transition: background-color 0.2s ease 0s;
  color: var(--gray120);

  & a {
    color: var(--gray120);
  }

  &:hover {
    background-color: var(--gray20);
  }
`;

export const LnbList = styled.span`
  display: block;
  font-size: 14rem;
  cursor: pointer;
  border-radius: 6rem;
  height: 37rem;
  line-height: 37rem;
  padding: 0 8rem;
  color: var(--gray120);
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: var(--gray20);
  }
`;
