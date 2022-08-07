import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status style={{ background: `${setBgColor(isOnline)}` }}>
        {isOnline}
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

function setBgColor(props) {
  return props ? '#02c39a' : '#fe5f55';
}
