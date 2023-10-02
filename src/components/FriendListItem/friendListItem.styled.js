import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;

  list-style: none;
  margin: 0 auto;
  padding: 10px;
  width: 300px;
`;

export const Image = styled.img`
  margin-right: 30px;

  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #fff999;
`;

export const Status = styled.span`
  margin-right: 20px;
  margin-top: 35px;

  width: 10px;
  height: 10px;
  border: 1px solid #a4abb6;
  border-radius: 50%;

  background-color: ${({ $status }) => {
    if ($status === 'true') {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const NameFriend = styled.p`
  font-size: 24px;
  text-align: center;
`;
