import Graph from "./graph";
import Edge from "./edge"
import UnionFind from "./union_find";
import {isAcyclic, getLabeledEdges} from "./DFS";

function kruskal(graph: Graph): Array<Edge>{
    let mst = new Array<Edge>();
    let unionFind = new UnionFind();

    let graphEdges = graph.getSortedWeights();
    unionFind.initialization(graph.getNumberOfNodes());

    graphEdges.forEach(edge => {
        let [ firstNode, secondNode ] = edge.getNodes();

        if(unionFind.find(firstNode) != unionFind.find(secondNode)){
            mst.push(edge);
            unionFind.union(firstNode, secondNode);
        }
    });
    return mst;
}

function kruskalNaive(graph: Graph): Graph{
    let mst: Graph = new Graph();
    let graphEdges = graph.getSortedWeights();

    graphEdges.forEach(edge => {
        let [ firstNode, secondNode ] = edge.getNodes();
        mst.addToAdjacencyList(firstNode, secondNode);
        mst.addToAdjacencyList(secondNode, firstNode);

        if(!isAcyclic(mst))
            mst.removeLastEdgeOf(firstNode);

        else{
            let newEdge = new Edge();
            newEdge.createNewEdge(firstNode,secondNode, graph.weightBetween(firstNode,secondNode))
            mst.insertNewEdge(newEdge);
        }
    });
    return mst;
}

export{
    kruskal,
    kruskalNaive
};