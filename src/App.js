import './App.css';
import Homepage from './pages/homepage/homepage.components'
import { Route, Switch } from 'react-router-dom';


const HatsPage = () => {
  return <div>HATS PAGE</div>
}

function App() {
  return (
    <div>
      <Switch>
         <Route exact path="/" component={Homepage} />
         <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
