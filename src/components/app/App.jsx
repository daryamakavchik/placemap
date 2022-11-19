import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";

import styles from "./app.module.css";

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      esriConfig.apiKey =
      "AAPKff271af86e5e4145ae46098747021260kqF_X1V0Z8FSN9TJcZbqceQjUdHGDJ11-hNCPx8t2CVvrp_Lvbd5S64hXMVFd_CO";

      const map = new Map({
        basemap: "osm-dark-gray",
      });

      const view = new MapView({
        map: map,
        center: [-118.243683, 34.052235],
        zoom: 13,
        container: mapDiv.current,
      });
    }
  }, []);

  return <div className={styles.webmap} ref={mapDiv}></div>;
}

export default App;