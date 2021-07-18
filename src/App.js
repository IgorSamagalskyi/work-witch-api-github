import './App.scss';
import Routes from './routers/Routes'
import {BrowserRouter as Router} from 'react-router-dom';
import MainMenu from "./routers/MainMenu";
import Alert from "./componetns/Alert/Alert";

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu/>
          <div className={'container pt-4'}>
              <Alert alert={{text: 'test-alert'}}/>
        <Routes/>
          </div>
      </Router>
    </div>
  );
}

export default App;
