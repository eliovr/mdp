let fdg = new ForceDirectedGraph('fdg', 600, 600);
let pc = new ParallelCoordinates('pc');

fdg.addListener(pc);
pc.addListener(fdg);

d3.json("/data/iris.json", (error, json) => {
  fdg.setData(json.nodes, json.links);
});
