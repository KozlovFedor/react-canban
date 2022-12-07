import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Page from './components/Page/Page';
import SideBar from './components/SideBar/SideBar';
import { Table } from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Layout sideBar={<SideBar />}>
        <Page>
          <Table columns={{}}/>
        </Page>
      </Layout>
    </div>
  );
}

export default App;
