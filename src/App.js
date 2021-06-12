import Layout from 'layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomePage, RegisterPage, ProfilePage} from 'pages'

function App() {

  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/profile" component={ProfilePage}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;
