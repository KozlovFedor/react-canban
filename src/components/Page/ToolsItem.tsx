import React from 'react';
import styled from 'styled-components';
import { ceil, backgrounds, textColors } from '../../styledVariables';
import { IconType } from '../Icons';
import Text from '../Text';

export interface ToolsItemProps {
  selected: boolean;
  Icon: IconType;
  title: string;
}

const StyledItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: ${ceil.x2};
  gap: 10px;
`;

const StyledItemBackground = styled.div`
  width: 138px;
  background: ${backgrounds.white};
  border-radius: 0px 8px 8px 0px;
`;

const Mark = styled.div`
  width: 4.12px;
  height: 50px;
  background: ${backgrounds.blue};
  border-radius: 0px 10px 10px 0px;
  position: absolute;
`;

export const ToolsItem: React.FC<ToolsItemProps> = (props) => {
  const {
    selected,
    Icon,
    title,
  } = props;

  if (selected) {
    return (
      <StyledItemBackground>
        <Mark/>
        <StyledItem>
          <Icon color={textColors.blue}/>
          <Text color={textColors.blue}>{title}</Text>
        </StyledItem>
      </StyledItemBackground>
    );
  }

  return (
    <StyledItem>
      <Icon />
      <Text>{title}</Text>
    </StyledItem>
  );
};
