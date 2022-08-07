import styled from '@emotion/styled';

export const StatCard = styled.section`
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: rgb(149, 93, 202);
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  width: calc(100% / 5);
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  color: white;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
