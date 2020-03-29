import React from "react";
import { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Todos from "./components/Todos";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = '/' component={Home} />
                <Route path = '/todos' component={Todos} />
            </Switch>
        )
    }
}

export default App;