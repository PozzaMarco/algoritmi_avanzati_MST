"use strict";
//========================================================================================
/*                                                                                      *
 * Classe che rappresenta la struttura dati Union-Find.                                 *
 * Viene implementata come un Array numerico in cui gli indici sono i nodi,             *
 * i valori sono i padri del nodo indice e la coppia nodo-padre rappresenta il lato.    *
 * Viene inserito anche un campo size che mantiene la grandezza dei sottoalberi.        *
 *                                                                                      */
//========================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
var UnionFind = /** @class */ (function () {
    function UnionFind() {
        this.union_find = new Array();
        this.sub_tree_size = new Array();
    }
    UnionFind.prototype.initialization = function (numberOfNodes) {
        for (var i = 0; i <= numberOfNodes; i++) {
            this.union_find[i] = i;
            this.sub_tree_size[i] = 1;
        }
    };
    UnionFind.prototype.getParent = function (node) {
        return this.union_find[node];
    };
    UnionFind.prototype.getSize = function (node) {
        return this.sub_tree_size[node];
    };
    UnionFind.prototype.setParent = function (node, parent) {
        this.union_find[node] = parent;
    };
    UnionFind.prototype.setSize = function (firstNode, secondNode) {
        this.sub_tree_size[firstNode] =
            this.getSize(firstNode) + this.getSize(secondNode);
    };
    UnionFind.prototype.find = function (node) {
        if (this.getParent(node) == undefined)
            return NaN;
        if (this.getParent(node) == node)
            return node;
        return this.find(this.getParent(node));
    };
    UnionFind.prototype.union = function (firstNode, secondNode) {
        var firstNodeSet = this.find(firstNode);
        var secondNodeSet = this.find(secondNode);
        if (firstNodeSet != secondNodeSet) {
            if (this.getSize(firstNodeSet) >= this.getSize(secondNodeSet)) {
                this.setParent(secondNodeSet, firstNodeSet);
                this.setSize(firstNodeSet, secondNodeSet);
            }
            else {
                this.setParent(firstNodeSet, secondNodeSet);
                this.setSize(secondNodeSet, firstNodeSet);
            }
        }
    };
    UnionFind.prototype.printUnionFind = function () {
        var _this = this;
        this.union_find.forEach(function (parent, node) {
            console.log("Node: " + node);
            console.log("Parent: " + parent);
            console.log("Size: " + _this.sub_tree_size[node]);
            console.log("--------------");
        });
    };
    return UnionFind;
}());
exports.default = UnionFind;
