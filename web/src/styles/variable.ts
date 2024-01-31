import { css } from 'styled-components';

interface FlexType {
  direction: string;
  justify: string;
  align: string;
}

export const flex = (obj: FlexType) => `
    display: flex;
    flex-direction: ${obj?.direction ?? 'row'};
    justify-content: ${obj?.justify ?? 'center'};
    align-items: ${obj?.align ?? 'center'}
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const blind = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`;

export const ellipsis = (line: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
`;

export const container = css`
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;

  @media screen and (min-width: 768px) {
    padding: 0 48rem;
  }
`;

export const logo = css`
  font-family: 'TAEBAEKmilkyway', serif;
  font-weight: 600;
`;
