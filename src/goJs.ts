export const initDiagram = () => {
  const diagram = new go.Diagram("myDiagramDiv");
  diagram.nodeTemplate = new go.Node(
    "Horizontal",
    // the entire node will have a light-blue background
    { background: "#44CCFF" }
  )
    .add(
      new go.Picture(
        // Pictures should normally have an explicit width and height.
        // This picture has a red background, only visible when there is no source set
        // or when the image is partially transparent.
        { margin: 10, width: 50, height: 50, background: "red" }
      )
        // Picture.source is data bound to the "source" attribute of the model data
        .bind("source")
    )
    .add(
      new go.TextBlock(
        "Default Text", // the initial value for TextBlock.text
        // some room around the text, a larger font, and a white stroke:
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" }
      )
        // TextBlock.text is data bound to the "name" property of the model data
        .bind("text", "name")
    );
  diagram.model = new go.Model([
    // note that each node data object holds whatever properties it needs;
    // for this app we add the "name" and "source" properties
    // because in our template above, we have defined bindings to expect them
    { name: "Don Meow", source: "cat1.png" },
    { name: "Copricat", source: "cat2.png" },
    { name: "Demeter", source: "cat3.png" },
    {
      /* Empty node data, to show a node with no values from bindings */
    },
  ]);
  return diagram;
};
