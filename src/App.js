import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./homeComponents/home";
import Sieve from "./newprimeComponent/PrimeNumberVisualizer";
import Sort from "./sortComponent/sortVisualizer";
import Search from "./searchComponents/Searching";
import Stack from "./stackComponent/StackVisualizer";
import Queue from "./queueComponent/QueueVisualizer";
import ArrayVisualizer from "./arrayComponent/ArrayVisualizer";
import Linkedlist from "./llComponents/LinkedListVisualizer";
import Avl from "./avlComponents/AVLComponents";
import Bst from "./bstComponent/BSTVisualizer";
import Btree from "./btreeComponent/BTreeVisualizer";
import Bfs from "./bfsComponents/BFSVisualizer";
import Dfs from "./dfsComponents/DFSVisualizer";

class App extends Component {

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/arrayvisualizer'  component={ArrayVisualizer}/>
                    <Route path='/linkedlist'  component={Linkedlist}/>
                    <Route path='/searching'  component={Search}/>
                    <Route path='/prime' component={Sieve}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/stack' component={Stack}/>
                    <Route path='/queue' component={Queue}/>
                    <Route path='/avl' component={Avl}/>
                    <Route path='/bst' component={Bst}/>
                    <Route path='/Btree' component={Btree}/>
                    <Route path='/bfs' component={Bfs}/>
                    <Route path='/dfs' component={Dfs}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
