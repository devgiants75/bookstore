import { styled } from 'styled-components';
import { logo } from '../../styles/variable';

export const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid var(--gray40);
  margin-top: 100rem;
  background-color: var(--gray10);
`;

export const Ul = styled.ul`
  display: flex;
  gap: 32rem;
  color: var(--gray90);
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;

  @media screen and (min-width: 768px) {
    padding: 40rem 48rem 40rem;
  }
`;

export const List = styled.li`
  & a {
    display: inline-block;
    color: var(--gray110);
    font-size: 14rem;
    position: relative;
  }

  &:nth-child(3) a {
    font-weight: 600;
  }
`;

export const Inner = styled.div`
  max-width: 1440rem;
  display: flex;
  margin: 0 auto;
  padding: 0 16rem;
  gap: 72rem;

  @media screen and (min-width: 768px) {
    padding: 0 48rem 80rem;
  }
`;

export const Logo = styled.h1`
  ${logo};
  font-size: 26rem;
  color: var(--gray130);
`;

export const Address = styled.div`
  & div {
    display: flex;
    column-gap: 24rem;
    margin-bottom: 4rem;
  }

  & span {
    font-size: 13rem;
    color: var(--gray80);
    position: relative;
  }

  & span:not(:first-child):after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 10rem;
    background-color: var(--gray40);
    top: 50%;
    left: -12rem;
    transform: translateY(-50%);
  }
`;

export const Copy = styled.div`
  font-size: 13rem;
  color: var(--gray80);
  margin-top: 20rem;
`;
