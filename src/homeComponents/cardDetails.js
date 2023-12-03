// import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./images/sorting.png";
// import queen from "./images/queen.PNG";
// import binSearch from "./images/binaryTree.png";
import stack from './images/stack.jpeg';
import queue from './images/queue1.png';
import array from './images/Array.png';
import searching from './images/searching.png';
export function getDetails(){
   return [
        {
            id:1,
            title:"Array ",
            description:"A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
            route:"/arrayvisualizer",
            img:array
         },
         {
            id:2,
            title:"Searching ",
            description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
            route:"/searching",
            img:searching
        },
        {
            id:3,
            title:"Sorting ",
            description:"Compare different sorting algorithms",
            route:"/sort",
            img:sort
        },
        {
            id:4,
            title:"Stack",
            description:"Compare different recursive sorting algorithms",
            route:"/stack",
            img:stack
        },
        {
            id:5,
            title:"Queue",
            description:"The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
            route:"/queue",
            img:queue
        },
    //    {
    //        id:6,
    //        title:"Pathfinder",
    //        description:"Visualize graph algorithms like dijkstra, BFS, DFS",
    //        route:"/pathfinder",
    //        img:graph
    //    },
    //    {
    //        id:7,
    //        title:"N Queen",
    //        description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
    //        route:"/nqueen",
    //        img:queen
    //    },
       {
           id:6,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force",
           route:"/prime",
           img:primes
       },
    //    {
    //        id:9,
    //        title:"Tree",
    //        description:"The 15 puzzle is a sliding puzzle having 15 square tiles numbered 1–15 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position",
    //        route:"/15puzzle",
    //        img:puzzle
    //    }

   ]
}