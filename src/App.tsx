import { FunctionComponent } from 'react';
import { Layout } from './sharedComponents/LanguageButtons/Layout/Layout';
import './App.css';
import './reset.css';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
