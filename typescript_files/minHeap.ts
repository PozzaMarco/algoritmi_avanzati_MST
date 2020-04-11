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

export default class MinHeap {
  heap: number[];

  constructor() {
    this.heap = []; //Set first element (position 0) to null to simplify the calcs
  }

  getMin(): number {
    return this.heap[0];
  }

  insert(node: number) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1; // index of last element

    while (index > 0) { // while i not reach the root
      let element = this.heap[index], //take last element
        parentIndex = Math.floor((index - 1) / 2), 
        parent = this.heap[parentIndex]; //take parent of last element

      if (parent <= element) break; // if parent is less then element nothig to do

      this.heap[index] = parent; // else i have to swap it up the tree
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin(): number{
    let  min = this.heap[0];// save minimum value
    this.heap[0]= this.heap.pop()// remove last value and put at first place
    this.heapifyDown(0)// find the right position for the new first node

   return min
  }
  
  heapifyDown(index: number){
    let left = 2*index+1, right = 2*index+2, smallest = index;
    const length = this.heap.length;

    // if left child is lower than parent
     if(left <= length &&  this.heap[left] < this.heap[smallest] ){
        smallest = left
      }
     // if right child is lower than parent
     if(right <= length && this.heap[right] < this.heap[smallest]) {
       smallest = right
     }
    // Swap
    if(smallest !== index){
       [this.heap[smallest],this.heap[index]] =
       [this.heap[index],this.heap[smallest]]
      this.heapifyDown(smallest)
    }
 }
}
