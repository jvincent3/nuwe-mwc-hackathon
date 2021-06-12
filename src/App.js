import Layout from 'layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;
