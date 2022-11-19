import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import Search from "@arcgis/core/widgets/Search";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import * as locator from "@arcgis/core/rest/locator";
import Locate from "@arcgis/core/widgets/Locate";
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

      let locateWidget = new Locate({
        view: view,
        graphic: new Graphic({
          symbol: { type: "simple-marker" }
        })
      });
      
      view.ui.add(locateWidget, "top-right");

      const serviceUrl =
      "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

    view.on("click", function (evt) {
      if (evt.target.classList.contains('.esri-search__submit-button') || ('.esri-menu__list-item')){
        document.getElementById("root").classList.add('nopointer');
      } else {
      const params = {
        location: evt.mapPoint,
      };
      locator.locationToAddress(serviceUrl, params).then(
        function (response) {
          const address = response.address;
          showAddress(address, evt.mapPoint);
        },
        function (err) {
          showAddress("No address found.", evt.mapPoint);
        }
      );
      }
    });

    function showAddress(address, pt) {
      view.popup.open({
        title:
          +Math.round(pt.longitude * 100000) / 100000 +
          ", " +
          Math.round(pt.latitude * 100000) / 100000,
        content: address,
        location: pt,
      });
    }

    const routeUrl =
      "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

      function addGraphic(type, point) {
        const graphic = new Graphic({
          symbol: {
            type: "simple-marker",
            color: type === "origin" ? "white" : "black",
            size: "8px",
          },
          geometry: point,
        });
        view.graphics.add(graphic);
      }

      const search = new Search({
        view: view,
        includeDefaultSources: false,
        sources: [
          {
            url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            singleLineFieldName: "SingleLine",
            outFields: ["Addr_type"],
            name: "ArcGIS World Geocoding Service",
            placeholder: "hello",
          //   resultSymbol: {
          //     type: "picture-marker",
          //     url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer" + "/images/search/search-symbol-32.png",
          //     size: 24,
          //     width: 24,
          //     height: 24,
          //     xoffset: 0,
          //     yoffset: 0
          // }
          },
        ],
      });

      view.popup.watch("visible", function (visible) {
        document
          .querySelector(".esri-ui-manual-container")
          .classList.remove("overlay");
          view.ui.remove(search);
      });

      view.ui.add({
        component: search,
        position: "manual",
      });

      view.when(function () {
        search.container.classList.add("widgetcenter");
        document
          .querySelector(".esri-ui-manual-container")
          .classList.add("overlay");
      });

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const point = {
        type: "point",
        longitude: -118.33987522698867,
        latitude: 34.084543364219606,
      };

      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };

      const attributes = {
        Name: "Meteora",
        Description: "restaurant",
      };

      const popupTemplate = {
        title: "{Name}",
        content: "{Description}",
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate,
      });
      graphicsLayer.add(pointGraphic);

    }
  }, []);

  return <div className={styles.webmap} ref={mapDiv}></div>;
}

export default App;