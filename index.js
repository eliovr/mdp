const fdg = new ForceDirectedGraph('fdg', 600, 600);
const pc = new ParallelCoordinates('pc');
const hub = new DataHub();

hub.notify(fdg);
hub.notify(pc);
fdg.listen(hub);
pc.listen(hub);
// fdg.addListener(pc);
// pc.addListener(fdg);

d3.json("/data/iris.json", (error, json) => {
  hub.notifyUpdate(json);
  // fdg.setData(json.nodes, json.links);
});
