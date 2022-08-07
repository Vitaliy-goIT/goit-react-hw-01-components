import styled from '@emotion/styled';

export const Item = styled.li`
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
}
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  height: 48px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
`;
