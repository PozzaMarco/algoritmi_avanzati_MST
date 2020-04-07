"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//========================================================================================
/*                                                                                      *
 * Modella le liste di adiacenza che rappresentano i singoli grafi.                     *
 * Oltre alla lista di adiacenza vera e propria, teniamo traccia anche del              *
 * numero di nodi e di archi nel grafo                                                  *
 *                                                                                      */
//========================================================================================
var edge_1 = __importDefault(require("./edge"));
var AdjacencyList = /** @class */ (function () {
    function AdjacencyList() {
        this.numberOfEdges = this.numberOfNodes = 0;
        this.adjacencyList = new Map();
        this.edgeList = new Array();
    }
    AdjacencyList.prototype.getNumberOfNodes = function () {
        return this.numberOfNodes;
    };
    AdjacencyList.prototype.getNumberOfEdges = function () {
        return this.numberOfEdges;
    };
    AdjacencyList.prototype.getList = function () {
        return this.adjacencyList;
    };
    AdjacencyList.prototype.getEdges = function () {
        return this.edgeList;
    };
    AdjacencyList.prototype.weightBetween = function (firstNode, secondNode) {
        var minWeight = Infinity;
        this.edgeList.forEach(function (edge) {
            if (edge.equalTo(firstNode, secondNode))
                if (minWeight > edge.getWeight())
                    minWeight = edge.getWeight();
        });
        return minWeight == Infinity ? Infinity : minWeight;
    };
    AdjacencyList.prototype.sortWeights = function () {
        return this.edgeList.sort(function (a, b) { return a.getWeight() - b.getWeight(); });
    };
    //Check if there is an edge between firstNode and secondNode
    AdjacencyList.prototype.areNodeConnected = function (firstNode, secondNode) {
        return this.weightBetween(firstNode, secondNode) != Infinity ? true : false;
    };
    AdjacencyList.prototype.addToAdjacencyList = function (node, adjacentNode) {
        if (!this.adjacencyList.has(node))
            //If node not in adjacency list
            this.adjacencyList.set(node, []); // node is added
        //Push a new adjacentNode into node's adjacent list
        this.adjacencyList.get(node).push(adjacentNode);
    };
    AdjacencyList.prototype.createAdjacencyList = function (graphDescription) {
        var _this = this;
        //Split graphDescription in lines and iterate through them to create the adjacency list
        var descriptionLines = graphDescription.split("\n");
        //Get and remove the first element of the descriptionLines that describe the graphDimensions
        var graphDimensions = descriptionLines.shift().split(" ");
        this.numberOfNodes = parseInt(graphDimensions[0]);
        this.numberOfEdges = parseInt(graphDimensions[1]);
        descriptionLines.forEach(function (line) {
            var nodeValues = line.split(" "); //Split lines into node values
            if (!isNaN(parseInt(nodeValues[0]))) {
                _this.addToAdjacencyList(parseInt(nodeValues[0]), parseInt(nodeValues[1]));
                var newEdge = new edge_1.default();
                newEdge.createNewEdge(parseInt(nodeValues[0]), parseInt(nodeValues[1]), parseInt(nodeValues[2]));
                _this.edgeList.push(newEdge);
            }
        });
    };
    AdjacencyList.prototype.getAdjacentNodesOf = function (node) {
        var adjacentNodeList = null;
        if (this.adjacencyList.has(node))
            adjacentNodeList = this.adjacencyList.get(node);
        return adjacentNodeList;
    };
    return AdjacencyList;
}());
exports.default = AdjacencyList;
