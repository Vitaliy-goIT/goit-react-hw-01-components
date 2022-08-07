import styled from '@emotion/styled';

export const Table = styled.table`
  font-family: inherit;
  width: 75vw;
  border: none;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  background-color: #fff;
`;

export const THead = styled.thead`
  height: 40px;
  background-color: #00a6fb;
  color: #fff;
`;

export const THeadRow = styled.th`
  border-right: 1px solid #ced4da;
  &:last-of-type {
    border-right: none;
  }
  color: #fff;
  width: calc(100% / 3);
`;

export const TRow = styled.tr`
  height: 40px;
  color: #6c757d;
  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

export const TData = styled.td`
  border-right: 1px solid #ced4da;
  &:last-of-type {
    border-right: none;
  }
`;
