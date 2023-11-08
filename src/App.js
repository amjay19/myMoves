import './App.css'
import MyMoves from './components/MyMoves'
import MoveTrackerDetails from './components/MoveTrackerDetails'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MyMoves} />
      <Route exact path="/moveDetails" component={MoveTrackerDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
