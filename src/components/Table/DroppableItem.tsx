import React from 'react';
import styled from 'styled-components';
import { DraggableItemType, DraggableItemTypes } from '../../constants';
import { useDrop } from 'react-dnd';

const StyledItem = styled.div`
  position: relative;
  width: 100%;
`;

interface DroppableItemProps extends React.PropsWithChildren {
  moveItem: (fromColumnKey: string, fromItemKey: string) => void,
};

export const DroppableItem: React.FC<DroppableItemProps> = (props) => {
  const [{ isOver }, drop] = useDrop<DraggableItemType, unknown, {isOver: boolean}>(() => ({
    accept: DraggableItemTypes.TABLE_ITEM,
    drop: (item) => {
      props.moveItem(item.columnKey, item.key);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <StyledItem ref={drop}>
      {props.children}
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </StyledItem>
  );
};