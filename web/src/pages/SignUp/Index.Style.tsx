import { styled } from 'styled-components';

export const Container = styled.form`
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
  transition: 0.2s all ease;

  &:hover {
    background-color: var(--blue100);
  }
`;

export const SignIn = styled.div`
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
