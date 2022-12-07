import React from 'react';
import styled from 'styled-components';
import {ceil} from '../../styledVariables';
import {ToolsItem, ToolsItemProps} from './ToolsItem';
import Text from '../Text';

const StyledItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledTitle = styled(StyledItem)`
  margin-bottom: 4px;
  padding-left: ${ceil.x2};
`;

interface Item extends ToolsItemProps {
  key: string;
};

interface ToolsProps {
  title: string;
  items: Item[];
  onItemClick: (key: string) => void;
}

const Tools: React.FC<ToolsProps> = (props) => {
  const {
    title,
    items,
    onItemClick,
  } = props;

  return (
    <>
      <StyledTitle>
        <Text fontSize='18px'>{title}</Text>
      </StyledTitle>
      {items.map(item => (
        <StyledItem key={item.key} onClick={() => onItemClick(item.key)}>
          <ToolsItem selected={item.selected} Icon={item.Icon} title={item.title}/>
        </StyledItem>
      ))}
    </>
  );
};

export default Tools;