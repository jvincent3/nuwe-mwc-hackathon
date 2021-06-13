import React, {useEffect} from 'react'
import Layout from 'layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomePage, RegisterPage, ProfilePage, VerifyPage, PageNotFound} from 'pages'

function App() {

    useEffect(() => {
        if (localStorage.getItem("users") === null)
            localStorage.setItem("users", JSON.stringify([]))
    })

  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/profile" component={ProfilePage}/>
                <Route exact path="/verify" component={VerifyPage}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;
