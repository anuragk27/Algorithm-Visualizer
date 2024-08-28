import primes from "./images/primes.jpg";
import sort from "./images/sort.jpg";
import stack from './images/st.jpg';
import queue from './images/queue1.jpg';
import array from './images/array1.jpg';
import searching from './images/search.jpg';
import avl from './images/avll.jpg';
import bfs from './images/bfs.jpg';
import bst from './images/bst1.jpg';
import btree from './images/btree.jpg';
import dfs from './images/dfs1.jpg';
import ll from './images/link.jpg';

export function getDetails(){
   return [
        {
            id:1,
            title:"Array ",
            route:"/arrayvisualizer",
            img:array
         },
        {
            id:2,
            title:"Linked List ",
            route:"/linkedlist",
            img:ll
         },
         {
            id:3,
            title:"Searching ",
            route:"/searching",
            img:searching
        },
        {
            id:4,
            title:"Sorting ",
            route:"/sort",
            img:sort
        },
        {
            id:5,
            title:"Stack",
            route:"/stack",
            img:stack
        },
        {
            id:6,
            title:"Queue",
            route:"/queue",
            img:queue
        },
       {
           id:7,
           title:"BST",
           route:"/bst",
           img:bst
       },
       {
           id:8,
           title:"B-Tree",
           route:"/btree",
           img:btree
       },
       {
           id:9,
           title:"AVL Tree",
           route:"/avl",
           img:avl
       },
       {
           id:10,
           title:"BFS",
           route:"/bfs",
           img:bfs
       },
       {
           id:11,
           title:"DFS",
           route:"/dfs",
           img:dfs
       },
       {
            id:12,
            title:"Prime Numbers",
            route:"/prime",
            img:primes
    },
   ]
}