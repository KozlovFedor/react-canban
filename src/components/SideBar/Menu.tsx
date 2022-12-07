import React, { useState } from 'react';
import styled from 'styled-components';
import { textColors } from '../../styledVariables';
import { ChevronDownIcon } from '../Icons';
import Text from '../Text';

const StyledItem = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledTitle = styled(StyledItem)`
  margin-bottom: 4px;
`;

interface MenuItem {
  key: string;
  title: string;
};

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = (props) => {
  const {
    title,
    items,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <StyledTitle onClick={() => setIsOpen(prev => !prev)} >
        <ChevronDownIcon color={textColors.white} height='24px'/>
        <Text color={textColors.white}>{title}</Text>
      </StyledTitle>
      {isOpen && items.map(item => (
        <StyledItem key={item.key}>
          <Text color={textColors.grey}>{item.title}</Text>
        </StyledItem>
      ))}
    </>
  );
};

export default Menu;