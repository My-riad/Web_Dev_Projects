import './App.css';
import Header from './Header';
import IndividualCards from './IndividualCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat"/> 
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/> 
            <Chats/>
          </Route>
          <Route path="/">
          <Header/> 
            <IndividualCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;