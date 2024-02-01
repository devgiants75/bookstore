import { styled } from 'styled-components';
import { container, logo } from '../../styles/variable';

export const Nav = styled.nav`
  ${container};
  display: flex;
  align-items: center;
  height: 60rem;
`;

export const Logo = styled.h1`
  ${logo};
  font-size: 26rem;
  color: var(--gray130);
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-start;

  & a {
    display: flex;
    align-items: center;
  }
`;

export const GnbFullMenu = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;
`;

export const GnbToggle = styled.button`
  display: flex;
  width: 24rem;
  height: 16rem;
  align-items: center;

  & span {
    position: relative;
    width: 100%;
    height: 2rem;
    background: var(--gray120);
    transition: 0.4s;
    font-size: 0;
  }

  & span:before,
  & span:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gray120);
    left: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & span:before {
    transform: translateY(-8rem);
  }

  & span:after {
    transform: translateY(8rem);
  }

  &.active span {
    background: none;
  }

  &.active span:before {
    transform: rotate(45deg);
  }

  &.active span:after {
    transform: rotate(-45deg);
  }
`;

export const Gnb = styled.div`
  display: flex;
  gap: 36rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
