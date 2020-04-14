import MinHeap from "./typescript_files/minHeap";
import HeapNode from "./typescript_files/heapNode";


let queue = new MinHeap();
let x1 = new HeapNode(1,38);
let x2 = new HeapNode(2,23);
let x3 = new HeapNode(3,36);
let x4 = new HeapNode(4,45);
let x5 = new HeapNode(5,32);
let x6 = new HeapNode(6,57);
let x7 = new HeapNode(7,10);

queue.insert(x1);
queue.insert(x2);
queue.insert(x3);
queue.insert(x4);
queue.insert(x5);
queue.insert(x6);
queue.insert(x7);

console.log(queue)
console.log("-------------------")
queue.extractMin()
queue.extractMin()
queue.extractMin()
queue.extractMin()

queue.extractMin()

console.log(queue)
console.log("-------------------")
queue.insert(x5);
queue.insert(x3);
queue.insert(x7);
console.log(queue) 
console.log("-------------------")

queue.update(4,100);
console.log(queue) 
