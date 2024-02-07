import { styled } from 'styled-components';
import { container, logo } from '../../styles/variable';

export const Container = styled.div`
  max-width: 420rem;
  margin: 120rem auto;

  & label[data-shrink='true'] {
    color: var(--gray100);
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

export const Title = styled.h3`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 16rem;
  height: 48rem;
  background-color: var(--blue80);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
`;

export const Forgotten = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  justify-content: center;

  & a {
    font-size: 13rem;
    color: var(--gray110);

    &:not(:first-child):before {
      content: '';
    }
  }

  & hr {
    display: block;
    width: 1px;
    height: 12px;
    border: 0;
    background: #d7dce5;
  }
`;

export const SignUp = styled.div`
  text-align: center;
  margin-top: 40rem;

  & span {
    color: var(--gray110);
    font-size: 14rem;
  }

  & a {
    margin-left: 8rem;
    font-size: 14rem;
    text-decoration: underline;
    color: var(--blue80);
  }
`;
