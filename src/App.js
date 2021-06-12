import Layout from 'layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, RegisterPage} from 'pages'

function App() {
  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={RegisterPage}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;
