import React, {useEffect} from 'react'
import Layout from 'layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomePage, RegisterPage, ProfilePage, VerifyPage, PageNotFound, LoginPage} from 'pages'
import {AnimatePresence} from 'framer-motion'

function App() {

    useEffect(() => {
        if (localStorage.getItem("users") === null)
            localStorage.setItem("users", JSON.stringify([]))
    })

  return (
    <Router>
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/verify" component={VerifyPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route path="/" component={PageNotFound}/>
                </Switch>
            </AnimatePresence>
        </Layout>
    </Router>
  );
}

export default App;
