import { styled } from 'styled-components';

export const FullMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 24rem 8rem;
  background-color: #fff;
  border-radius: 16rem;
  border: 1px solid var(--gray90);
  //box-shadow:
  //  rgba(20, 20, 20, 0.12) 4px 12px 24px 0px,
  //  rgba(20, 20, 20, 0.08) 0px 1px 4px 0px;
`;

export const MenuContent = styled.div`
  position: relative;
  padding: 0 20rem;

  &:not(:first-child):before {
    position: absolute;
    top: 4rem;
    bottom: 4rem;
    left: 0;
    width: 1rem;
    background: #eaedf4;
    content: '';
  }
`;
export const Depth01 = styled.h5`
  font-size: 16rem;
  font-weight: 700;
  margin-bottom: 16rem;
  padding: 0 8rem;
  color: var(--gray120);
`;

export const Depth02 = styled.span`
  display: block;
  font-size: 14rem;
  cursor: pointer;
  border-radius: 6rem;
  height: 37rem;
  line-height: 37rem;
  padding: 0 8rem;
  color: var(--gray120);
  transition: background-color 0.2s ease 0s;
  font-weight: 500;

  &:hover {
    background-color: var(--gray20);
  }
`;
