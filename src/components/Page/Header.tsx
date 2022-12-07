import React from 'react';
import styled from 'styled-components';
import { backgrounds, ceil, textColors } from '../../styledVariables';
import Button from '../Button';
import { BellIcon, ChevronDownIcon, PlusIcon } from '../Icons';
import Input from '../Input';
import avatar from '../../assets/avatar.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 20px;
`;

const Left = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  gap: ${ceil.x2};
`;

const Right = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  gap: ${ceil.x2};
`;

const NotificationWrapper = styled.div`
  height: 32px;
  width: 32px;
  position: relative;
  display: flex;
  justify-content: end;
`;

const IconWrapper = styled.div`
  height: 32px;
  width: 32px;
  position: absolute;
`;

const Counter = styled.div`
  height: 18px;
  width: 22px;
  position: relative;
  left: 8px;
  top: -4px;
  border-radius: 4px;
  background: ${backgrounds.red};
  border: 1px solid ${backgrounds.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${textColors.white};
  font-size: 10px;
  line-height: 10px;
`;

const Avatar = styled.img`
  height: 40px;
`;


type HeaderProps = React.PropsWithChildren<{
}>;

const Header: React.FC<HeaderProps> = (props) => {
  const {
    children
  } = props;

  return (
    <Container>
      <Left>
        <Button primary>
          <PlusIcon color={textColors.white} height='24px'/>
          Add new
        </Button>
        <Button>
          Kanban
          <ChevronDownIcon height='24px'/>
        </Button>
        <Button>
          Filter
          <ChevronDownIcon height='24px'/>
        </Button>
      </Left>
      <Right>
        <Input height='40px'/>
        <NotificationWrapper>
          <IconWrapper>
            <BellIcon height='32px'/>
          </IconWrapper>
          <Counter>
            99+
          </Counter>
        </NotificationWrapper>
        <Avatar src={avatar} alt='avatar' />
      </Right>
      {children}
    </Container>
  );
};

export default Header;