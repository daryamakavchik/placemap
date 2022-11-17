import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Editor from "@arcgis/core/widgets/Editor";

import "./style.css";

const webmap = new WebMap({
  portalItem: {
    id: "459a495fc16d4d4caa35e92e895694c8",
  },
});

const view = new MapView({
  container: "viewDiv",
  map: webmap,
});

view.when(() => {
    const editor = new Editor({ view });
    view.ui.add(editor, "top-right");
});
