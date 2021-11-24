import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './sharedComponents/Layout';
import './App.css';
import './reset.css';
import { Routes } from 'sharedComponents/Layout/Routes';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
