import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./homeComponents/home";
import Sieve from "./newprimeComponent/PrimeNumberVisualizer";
import Sort from "./sortComponent/sortVisualizer";
import Search from "./searchComponents/Searching";
import Stack from "./stackComponent/StackVisualizer";
import Queue from "./queueComponent/QueueVisualizer";
import ArrayVisualizer from "./arrayComponent/ArrayVisualizer"

class App extends Component {

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/arrayvisualizer'  component={ArrayVisualizer}/>
                    <Route path='/searching'  component={Search}/>
                    <Route path='/prime' component={Sieve}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/stack' component={Stack}/>
                    <Route path='/queue' component={Queue}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
