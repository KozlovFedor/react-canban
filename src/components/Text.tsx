import React from 'react';
import styled from 'styled-components';
import { textColors } from '../styledVariables';

const StyledText = styled.text<TextProps>`
  color: ${props => props.color || textColors.black};
  font-size: ${props => props.fontSize || '14px'};
  opacity: ${props => props.secondary ? '0.5' : '1.0'};
  text-align: start;
  text-decoration: ${props => props.textDecoration}
`;

interface TextProps extends Omit<React.SVGProps<SVGTextElement>, 'ref'> {
  secondary?: boolean;
};

const Text: React.FC<TextProps> = (props) => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  );
};

export default Text;
