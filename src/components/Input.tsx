import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from './Icons';
import { backgrounds, textColors } from '../styledVariables';

type DivProps = Pick<InputProps, 'height'>

const Wrapper = styled.div<DivProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: ${props => props.height || '32px'};
  background: ${backgrounds.lightGrey};
  border-radius: 50px;
  
  &.sideBar {
    background: ${backgrounds.sideBarSelected};
    border-radius: 4px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0 0 0 16px;
  background: ${backgrounds.lightGrey};
  border-radius: 50px 0 0 50px;

  &.sideBar {
    padding: 0 0 0 10px;
    background: ${backgrounds.sideBarSelected};
    border-radius: 4px 0 0 4px;
    color: ${textColors.white};
    ::placeholder {
      color: ${textColors.grey};
    }
  }

  &:focus-visible {
    outline: none;
  }
`;

const IconWrapper = styled.div<DivProps>`
  height: ${props => props.height || '32px'};
  width: ${props => props.height || '32px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${backgrounds.lightGrey};
  border-radius: 0 50px 50px 0;
  margin-right: 9px;

  &.sideBar {
    background: ${backgrounds.sideBarSelected};
    border-radius: 0 4px 4px 0;
  }
`;

type InputProps = React.PropsWithRef<{
  className?: 'sideBar';
  height?: string;
}>;

const Input: React.FC<InputProps> = (props) => {
  return (
    <Wrapper className={props.className} height={props.height}>
      <StyledInput {...props} placeholder='Search...'/>
      <IconWrapper className={props.className} height={props.height}>
        <SearchIcon height='16px'/>
      </IconWrapper>
    </Wrapper>
  );
};

export default Input;
