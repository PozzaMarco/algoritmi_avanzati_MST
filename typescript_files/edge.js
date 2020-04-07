"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//========================================================================================
/*                                                                                      *
 * Classe che rappresenta un lato tra due nodi. I campi dati sono:                      *
 * - Nodo partenza                                                                      *
 * - Nodo arrivo                                                                        *
 * - Peso del lato                                                                      *
 *                                                                                      *
 * Contiene anche una serie di metodi di utility tra cui la ridefinizione di compare    *
 * per permettere il sorting dell'array di lati che verrà creato nell'adjacency list.   *
 *                                                                                      */
//========================================================================================
var Edge = /** @class */ (function () {
    function Edge() {
        this.firstNode = this.secondNode = this.weight = NaN;
    }
    Edge.prototype.getEdge = function () {
        return {
            firstNode: this.firstNode,
            secondNode: this.secondNode,
        };
    };
    Edge.prototype.getWeight = function () {
        return this.weight;
    };
    Edge.prototype.createNewEdge = function (firstNode, secondNode, weight) {
        this.firstNode = firstNode;
        this.secondNode = secondNode;
        this.weight = weight;
    };
    Edge.prototype.equalTo = function (firstNode, secondNode) {
        return (firstNode == this.firstNode || firstNode == this.secondNode) &&
            (secondNode == this.firstNode || secondNode == this.secondNode);
    };
    return Edge;
}());
exports.default = Edge;
