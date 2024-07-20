import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Library from './components/Library'
import Panchang from './components/Panchang'
import Puja from './components/Puja'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/panchang" component={Panchang} />
          <Route exact path="/puja" component={Puja} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
