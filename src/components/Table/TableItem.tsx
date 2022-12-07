import React from 'react';
import styled from 'styled-components';
import { backgrounds, textColors } from '../../styledVariables';

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: -webkit-fill-available;
  padding: 15px;
  justify-content: center;
  align-items: start;
  gap: 2px;
  border-radius: 8px;
  background: ${props => props.color ? props.color : backgrounds.lightGrey};

  &.completed {
    background: ${backgrounds.lightGrey};
    color: ${textColors.darkGrey};
    text-decoration-line: line-through;
  }
`;

export interface TableItemProps extends React.PropsWithChildren {
  color: string;
  className?: string;
};

export const TableItem: React.FC<TableItemProps> = (props) => {
  return (
    <StyledItem color={props.color} className={props.className}>
      {props.children}
    </StyledItem>
  );
};
