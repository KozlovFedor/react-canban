import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/bordio-logo.svg';
import avatar from '../../assets/avatar.svg';
import { ceil, backgrounds, textColors } from '../../styledVariables';
import Input from '../Input';
import Item from './Item';
import Menu from './Menu';
import Text from '../Text';

const StyledSideBar = styled.div`
  background: ${backgrounds.sideBar};
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 26px ${ceil.x2} ${ceil.x2} ${ceil.x2};
`;

const Logo = styled.img`
  height: 32px;
  margin-bottom: 26px;
`;

const InputWrapper = styled.div`
  margin-bottom: 26px;
`;

const ItemWrapper = styled.div`
  margin-bottom: 8px;
`;

const MenuWrapper = styled.div`
  margin-bottom: 4px;
`;

const Avatar = styled.img`
  height: 22px;
  padding-right: ${ceil.x1};
`;

const menuItems = [
  {
    key: 'Marketing',
    title: 'Marketing',
  },
  {
    key: 'Mobile App',
    title: 'Mobile App',
  },
];

const menuItems2 = [
  {
    key: 'Marketing',
    title: 'Marketing',
  },
  {
    key: 'Landing Pages',
    title: 'Landing Pages',
  },
  {
    key: 'Wedding',
    title: 'Wedding',
  },
  {
    key: 'Mobile App',
    title: 'Mobile App',
  },
  {
    key: 'House Construction',
    title: 'House Construction',
  },
];

type SideBarProps = React.PropsWithChildren<{
}>;

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <StyledSideBar>
      <Logo src={logo} alt='logo' />
      <InputWrapper>
        <Input className='sideBar'/>
      </InputWrapper>
      <ItemWrapper>
        <Item selected>
          <Avatar src={avatar} alt='avatar' />
          <Text color={textColors.white}>My workspace</Text>
        </Item>
      </ItemWrapper>
      <MenuWrapper>
        <Menu title='Favorites' items={menuItems}/>
      </MenuWrapper>
      <Menu title='My Projects' items={menuItems2}/>
    </StyledSideBar>
  );
};

export default SideBar;
