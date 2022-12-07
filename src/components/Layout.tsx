import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  background: #FFFFFF;
  display: flex;
`;

const StyledSideBar = styled.div`
  width: 219px;
  height: 100vh;
`;

const StyledContent = styled.div`
  width: 100vw;
  height: 100vh;
`;

type LayoutProps = React.PropsWithChildren<{
  sideBar?: React.ReactNode
}>;

const Layout: React.FC<LayoutProps> = (props) => {
  const {
    sideBar,
    children
  } = props;

  return (
    <StyledLayout>
      <StyledSideBar>{sideBar}</StyledSideBar>
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default Layout;
