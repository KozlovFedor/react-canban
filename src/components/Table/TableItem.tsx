import React from 'react';
import styled from 'styled-components';
import { backgrounds, textColors } from '../../styledVariables';
import { useDrag } from 'react-dnd';
import { DraggableItemType, DraggableItemTypes } from '../../constants';

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

  &.dragged {
    opacity: 0.5;
    transform: translate(0, 0);
  }
`;

export interface TableItemProps extends React.PropsWithChildren {
  itemKey: string;
  columnKey: string;
  color: string;
  className?: string;
};

export const TableItem: React.FC<TableItemProps> = (props) => {
  const [{isDragging}, drag] = useDrag<DraggableItemType, unknown, {isDragging: boolean}>(() => ({
    type: DraggableItemTypes.TABLE_ITEM,
    item: {
      key: props.itemKey,
      columnKey: props.columnKey,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <StyledItem ref={drag} color={props.color} className={`${props.className}${isDragging ? ' dragged' : ''}`}>
      {props.children}
    </StyledItem>
  );
};
