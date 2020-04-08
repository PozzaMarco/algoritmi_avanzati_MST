import Graph from "./graph";
import Edge from "./edge"
import UnionFind from "./union_find";

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

        if(!mst.isAcyclic())
            mst.removeLastEdge(firstNode);
    });
    return mst;
}