import React from 'react';
import styled from 'styled-components';
import { backgrounds, textColors } from '../../styledVariables';
import { PlusIcon } from '../Icons';
import { TableItem } from './TableItem';
import useTableData from './useTableData';
import Text from '../Text';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width 100%;
  height: 100%;
`;

const StyledTitle = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border-bottom: 1px solid ${backgrounds.border};
  gap: 10px;
  padding-top: 9px;

  &[data-last=true] {
    border-right: 1px solid ${backgrounds.border};
  }

  &.createColumn {
    font-weight: 400;
    color: ${textColors.grey};
    gap: 0;
    justify-content: start;
    padding-left: 30px;
  }
`;

const StyledContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  padding: 39px 10px;
  border-right: 1px solid ${backgrounds.border};
`;

const Counter = styled.div`
  height: 20px;
  border-radius: 100px;
  background: ${backgrounds.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${textColors.grey};
  font-size: 14px;
  line-height: 16px;
  padding: 2px 9px;
`;

interface IItem {
  key: string;
  description: string;
  time: string;
  color: string;
};

export interface IColumn {
  key: string;
  title: string;
  items: IItem[];
};

interface TableProps {
  columns: Record<string, IColumn>;
};

export const Table: React.FC<TableProps> = (props) => {
  const [columns, dispatch] = useTableData();

  return (
    <Container>
      {Object.entries(columns).map(([key, col], index) => (
        <StyledColumn key={col.key}>
          <StyledTitle data-last={index === Object.keys(columns).length - 1}>
            {col.title}
            <Counter>
              {col.items.length}
            </Counter>
          </StyledTitle>
          <StyledContent>
            {col.items.map(item => (
              col.key === 'completed' ? (
                <TableItem key={item.key} color={backgrounds.lightGrey}>
                  <Text color={textColors.darkGrey} textDecoration='line-through'>{item.description}</Text>
                  <Text color={textColors.darkGrey}>{item.time}</Text>
                </TableItem>
              ) : (
                <TableItem key={item.key} color={item.color}>
                  <Text>{item.description}</Text>
                  <Text secondary>{item.time}</Text>
                </TableItem>
              )
            ))}
          </StyledContent>
        </StyledColumn>
      ))}
      <StyledColumn>
        <StyledTitle className='createColumn'>
          <PlusIcon color={textColors.grey}/>
          Create status
        </StyledTitle>
      </StyledColumn>
    </Container>
  );
};
