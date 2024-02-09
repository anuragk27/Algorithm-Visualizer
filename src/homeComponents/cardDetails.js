import primes from "./images/primes.jpg";
import sort from "./images/sorting.png";
import stack from './images/stack.jpeg';
import queue from './images/queue1.png';
import array from './images/Array.png';
import searching from './images/searching.png';
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
            title:"Searching ",
            route:"/searching",
            img:searching
        },
        {
            id:3,
            title:"Sorting ",
            route:"/sort",
            img:sort
        },
        {
            id:4,
            title:"Stack",
            route:"/stack",
            img:stack
        },
        {
            id:5,
            title:"Queue",
            route:"/queue",
            img:queue
        },
       {
           id:6,
           title:"Prime Numbers",
           route:"/prime",
           img:primes
       },

   ]
}