import React, { useState } from 'react';
import styled from 'styled-components';
import { backgrounds } from '../../styledVariables';
import Tools from './Tools';
// import { ReactComponent as UnionIcon} from '../../assets/union.svg';
import { UnionIcon, CalendarIcon, TasksIcon, NotesIcon, FilesIcon } from '../Icons';
import Header from './Header';

const Container = styled.div`
  display: flex;
`;

const ToolsWrapper = styled.div`
  min-width: 154px;
  height: 100vh;
  background: ${backgrounds.lightGrey};
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  box-shadow: 0px 2px 4px #F0F1F2;
`;

const toolsItems = [
  {
    key: 'Roadmap',
    title: 'Roadmap',
    Icon: UnionIcon,
    selected: false,
  },
  {
    key: 'Schedule',
    title: 'Schedule',
    Icon: CalendarIcon,
    selected: true,
  },
  {
    key: 'Tasks',
    title: 'Tasks',
    Icon: TasksIcon,
    selected: false,
  },
  {
    key: 'Notes',
    title: 'Notes',
    Icon: NotesIcon,
    selected: false,
  },
  {
    key: 'Files',
    title: 'Files',
    Icon: FilesIcon,
    selected: false,
  },
];

type PageProps = React.PropsWithChildren<{
  // sideBar?: React.ReactNode
}>;

const Page: React.FC<PageProps> = (props) => {
  const {
    children
  } = props;

  const [items, setItems] = useState(toolsItems);

  const onItemClick = (key: string) => {
    setItems(prev => prev.map(item => ({
      ...item,
      selected: item.key === key,
    })));
  };

  return (
    <Container>
      <ToolsWrapper>
        <Tools title='Tools' items={items} onItemClick={onItemClick}/>
      </ToolsWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <Header/>
        </HeaderWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default Page;