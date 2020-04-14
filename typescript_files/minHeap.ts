//========================================================================================
/*                                                                                      *
 * Classe che implementa la logica ed i metodi utilizzati per andare a gestire          *
 * la struttura dati MinHeap tramite array.                                             *
 *                                                                                      *
 * Note:                                                                                *
 * Accesso al padre: i / 2;                                                             *
 * Accesso al figlio SX: 2 * i + 1;                                                     *
 * Accesso al figlio DX: 2 * i + 2.                                                     *
 *                                                                                      */
//========================================================================================
import HeapNode from "./heapNode";

export default class MinHeap {
  heap: HeapNode[];

  constructor() {
    this.heap = []; //Set first element (position 0) to null to simplify the calcs
  }

  getMin(): HeapNode {
    return this.heap[0];
  }

  insert(node: HeapNode) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1; // index of last element

    while (index > 0) {
      // while i not reach the root
      let element = this.heap[index], //take last element
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex]; //take parent of last element

      if (parent.value <= element.value) break; // if parent is less or equal then element nothing to do

      this.heap[index] = parent; // else i have to swap it up the tree
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin(): HeapNode {
    let min = this.heap[0]; // save minimum value
    
    let lastElement = this.heap.pop();

    if(this.heap.length != 0){
      this.heap[0] = lastElement; // remove last value and put at first place
      this.heapifyDown(0); // find the right position for the new first node
    }

    return min;
  }

  heapifyDown(index: number) {
    let left = 2 * index + 1,
      right = 2 * index + 2,
      smallest = index;
    const length = this.heap.length;

    // if left child is lower than parent
    if (left <= length && this.heap[left] && this.heap[left].value < this.heap[smallest].value) {
      smallest = left;
    }
    // if right child is lower than parent
    if (right <= length && this.heap[right] && this.heap[right].value < this.heap[smallest].value) {
      smallest = right;
    }
    // Swap
    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }
  
  contains(node: number): boolean{
    return this.containsUtil(node, 0);
  }

  containsUtil(node: number, index: number): boolean {
    if(node == this.heap[index].value)
      return true;
    else{
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if(this.heap[left] && node >= this.heap[left].value && this.heap[right] && node >= this.heap[right].value){
        return this.containsUtil(node, left) || this.containsUtil(node, right);
      }
      else if(this.heap[left] && node >= this.heap[left].value){
        return this.containsUtil(node,left);
      }
      else if(this.heap[right] && node >= this.heap[right].value)
        return this.containsUtil(node, right);
      else
        return false;

    }
  }

  isEmpty(): boolean{
    return this.heap.length == 0;
  }
}
