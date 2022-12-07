import React from 'react';
import styled from 'styled-components';
import { backgrounds, textColors } from '../styledVariables';

interface ButtonProps {
  primary?: boolean;
  height?: string;
}

const Button = styled.button<ButtonProps>`
  background: ${props => props.primary ? backgrounds.blue : backgrounds.lightGrey};
  color: ${props => props.primary ? textColors.white : textColors.black};
  height: ${props => props.height ? props.height : '40px'};
  border-radius: 50px;
  border: none;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
