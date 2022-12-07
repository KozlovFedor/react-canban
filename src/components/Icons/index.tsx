import React from 'react';
import styled, {css, ThemedStyledProps, StyledComponent} from 'styled-components';
import {ReactComponent as Union} from '../../assets/union.svg';
import {ReactComponent as Calendar} from '../../assets/calendar.svg';
import {ReactComponent as Tasks} from '../../assets/tasks.svg';
import {ReactComponent as Notes} from '../../assets/notes.svg';
import {ReactComponent as Files} from '../../assets/files.svg';
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as ChevronDown} from '../../assets/chevron-down.svg';
import {ReactComponent as Plus} from '../../assets/plus.svg';
import {ReactComponent as Bell} from '../../assets/bell.svg';
import {textColors} from '../../styledVariables';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  height?: string | number;
  color?: string;
}

export type IconType = StyledComponent<React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>, any, {}, never>

const svgStyles = (props: ThemedStyledProps<SVGProps, SVGProps>) => {
  return css<SVGProps>`
    height: ${props => props.height || '28px'};
    fill: ${props => props.color || textColors.grey};

    & path {
      fill: ${props => props.color || textColors.grey};
    }
  `;
};

const svgStrokeStyles = (props: ThemedStyledProps<SVGProps, SVGProps>) => {
  return css<SVGProps>`
    height: ${props => props.height || '28px'};
    stroke: ${props => props.color || textColors.grey};

    & path {
      stroke: ${props => props.color || textColors.grey};
    }
  `;
};

export const UnionIcon = styled(Union)`
  ${props => svgStyles(props)}
`;

export const CalendarIcon = styled(Calendar)`
  ${props => svgStyles(props)}
`;

export const TasksIcon = styled(Tasks)`
  ${props => svgStyles(props)}
`;

export const NotesIcon = styled(Notes)`
  ${props => svgStyles(props)}
`;

export const FilesIcon = styled(Files)`
  ${props => svgStrokeStyles(props)}
`;

export const SearchIcon = styled(Search)`
  ${props => svgStyles(props)}
`;

export const ChevronDownIcon = styled(ChevronDown)`
  ${props => svgStyles(props)}
`;

export const PlusIcon = styled(Plus)`
  ${props => svgStyles(props)}
`;

export const BellIcon = styled(Bell)`
  ${props => svgStrokeStyles(props)}
`;
