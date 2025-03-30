import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
import './App.css';

const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

const App = () => (
    <Router>
      <Routes>
        <Route path='/' exact render={() => <Redirect to='/index' />} />
        <Route component={DefaultLayout} />
      </Routes>
    </Router>
)

export default App;
