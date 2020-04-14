//========================================================================================
/*                                                                                      *
 * Classe utilizzata per rappresentare un nodo del grafo nello heap.                    *
 * Sarà composto da:                                                                    *
 * - valore del nodo;                                                                   *
 * - valore della key ( ovvero il peso minimo del lato che connette il nodo all'albero) *
 *                                                                                      */
//========================================================================================

export default class HeapNode{
    node: number;
    value: number;

    constructor(node: number, value: number){
        this.node = node;
        this.value = value;
    }

    getNode(): number{
        return this.node;
    }

    getValue(): number{
        return this.value;
    }

    setNode(node: number){
        this.node = node;
    }

    setValue(value: number){
        this.value = value;
    }
}