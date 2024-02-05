import { styled } from 'styled-components';
import { container, logo } from '../../styles/variable';

export const Header = styled.header`
  z-index: 10;
  position: relative;
`;

export const HeaderTop = styled.div`
  ${container};
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16rem;

  & a {
    font-size: 14rem;
    color: var(--gray110);
    font-weight: 500;
  }

  & hr {
    display: block;
    width: 1px;
    height: 12px;
    border: 0;
    background: #d7dce5;
  }
`;

export const Logo = styled.h1`
  ${logo};
  font-size: 30rem;
  color: var(--gray130);
`;
