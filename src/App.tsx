import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './sharedComponents/Layout';
import './utils/localization/i18n';
import './App.css';
import './reset.css';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
};

export default App;
