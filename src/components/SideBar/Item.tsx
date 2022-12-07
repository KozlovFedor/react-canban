import React from 'react';
import styled from 'styled-components';
import { ceil, backgrounds } from '../../styledVariables';

interface ItemProps extends React.PropsWithChildren {
  selected: boolean;
}

const StyledItem = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledItemBackground = styled.div`
  width: 187px;
  background: ${backgrounds.sideBarSelected};
  position: relative;
  left: -${ceil.x2};
  padding: 0 ${ceil.x2};
`;

const Item: React.FC<ItemProps> = ({ selected, ...props }) => {
  if (selected) {
    return (
      <StyledItemBackground>
        <StyledItem {...props}/>
      </StyledItemBackground>
    );
  }

  return <StyledItem {...props}/>;
};

export default Item;