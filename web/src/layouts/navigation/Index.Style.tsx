import { styled } from 'styled-components';
import Paper from '@mui/material/Paper';
import m from '@emotion/styled';
import { container, logo } from '../../styles/variable';

export const Nav = styled.nav`
  ${container};
  display: flex;
  align-items: center;
  height: 60rem;
  background-color: #fff;
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
  align-items: center;
  gap: 16rem;
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

export const Popover = m(Paper)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 24rem 8rem;
  background-color: #fff;
  border-radius: 16rem;
  box-shadow:
    rgba(20, 20, 20, 0.12) 4px 12px 24px 0px,
    rgba(20, 20, 20, 0.08) 0px 1px 4px 0px;
`;

export const SearchIcon = styled.div`
  width: 24rem;
  height: 24rem;
`;

export const Search = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  top: 100rem;
  left: 0;
  right: 0;
  padding: 16rem 24rem;
  box-shadow: 0 16px 16px rgba(55, 63, 87, 0.1);
  background-color: #fff;

  &.active {
    display: block;
  }
`;

export const SearchInner = styled.div`
  ${container};
  display: flex;
  align-items: center;

  & input {
    font-size: 24rem;
    padding: 14rem 0 14rem 14rem;
    width: 100%;
    color: var(--gray120);
  }
`;

export const SearchCloseIcon = styled.div`
  width: 40rem;
  height: 40rem;
  border: 1px solid var(--gray60);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8rem;
  cursor: pointer;
`;
