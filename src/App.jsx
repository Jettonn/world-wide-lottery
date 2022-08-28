import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//redux
import { store } from './store/index'
import { Provider } from 'react-redux'

//components
import Navbar from './Navbar'
import Home from './views/Home'
import SessionPlayers from './views/SessionPlayers'
import Stats from './views/Stats'
import Winners from './views/Winners'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/winners' component={Winners} />
            <Route path='/stats' component={Stats} />
            <Route path='/session-players' component={SessionPlayers} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
