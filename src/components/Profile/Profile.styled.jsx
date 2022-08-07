import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 0.5px solid #dee2e6;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Description = styled.div`
  padding-top: 40px;
`;

export const PersonName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const Tag = styled.p``;
export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: auto;
  height: 80px;
  border-radius: 0px 0px 4px 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(350px / 3);
  background-color: #e9ecef;
  border: 0.5px solid #dee2e6;
`;
export const Label = styled.span`
  color: #7f8792;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  color: #000000;
`;
