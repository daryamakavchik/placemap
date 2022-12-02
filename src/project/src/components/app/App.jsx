import React, { useRef, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import Search from "@arcgis/core/widgets/Search";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import * as locator from "@arcgis/core/rest/locator";
import Locate from "@arcgis/core/widgets/Locate";
import esriConfig from "@arcgis/core/config";
import meteora from "../../images/meteora.png";
import daedo from "../../images/daedo.jpeg";
import kinn from "../../images/kin.jpeg";
import steep from "../../images/steep.jpeg";
import styles from "./app.module.css";

function App() {
  const [pointState, setPointState] = useState({
    Name: "Meteora",
    Description: "restaurant",
    LATITUDE: 34.084543364219606,
    LONGITUDE: -118.33987522698867,
    image: meteora,
  });

  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      esriConfig.apiKey =
        "AAPKff271af86e5e4145ae46098747021260kqF_X1V0Z8FSN9TJcZbqceQjUdHGDJ11-hNCPx8t2CVvrp_Lvbd5S64hXMVFd_CO";
      const map = new Map({ basemap: "osm-dark-gray" });

      const view = new MapView({
        map: map,
        center: [-118.243683, 34.052235],
        zoom: 13,
        container: mapDiv.current,
      });

      document.body.classList.add("nopointer");

      let locateWidget = new Locate({
        view: view,
        graphic: new Graphic({
          symbol: { type: "simple-marker" },
        }),
      });
      view.ui.add({
        component: locateWidget,
        position: "manual",
      });
      locateWidget.on("locate", function (locateEvent) {
        document
          .querySelector(".esri-ui-manual-container")
          .classList.remove("overlay");
        view.ui.remove(search);
        view.ui.remove(locateWidget);
        document.body.classList.remove("nopointer");
        const params = { location: locateEvent.position.coords };
        locator.locationToAddress(serviceUrl, params).then(
          function (response) {
            const address = response.address;
            showAddress(address, locateEvent.position.coords);
          },
          function (err) {
            showAddress("No address found.", evt.mapPoint);
          }
        );
      });

      const serviceUrl =
        "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

      view.on("click", function (evt) {
        const params = { location: evt.mapPoint };
        locator.locationToAddress(serviceUrl, params).then(
          function (response) {
            const address = response.address;
            showAddress(address, evt.mapPoint);
          },
          function (err) {
            showAddress("No address found.", evt.mapPoint);
          }
        );
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

      const search = new Search({
        view: view,
        includeDefaultSources: false,
        sources: [
          {
            url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            singleLineFieldName: "SingleLine",
            outFields: ["Addr_type"],
            name: "ArcGIS World Geocoding Service",
            placeholder: "enter your location",
          },
        ],
      });
      view.ui.add({
        component: search,
        position: "manual",
      });
      view.when(function () {
        search.container.classList.add("widgetcenter");
        document.querySelector(".esri-locate").classList.add("locatecenter");
        document.querySelector(".esri-locate").classList.add("zindex");
        document
          .querySelector(".esri-ui-manual-container")
          .classList.add("overlay");
      });
      view.popup.watch("visible", function (visible) {
        document
          .querySelector(".esri-ui-manual-container")
          .classList.remove("overlay");
        view.ui.remove(search);
        document.body.classList.remove("nopointer");
      });

      let data = [
        {
          Name: "Meteora",
          Description: "restaurant",
          LATITUDE: 34.08451193448912,
          LONGITUDE: -118.33992004394125,
          image: meteora,
          index: 1,
        },
        {
          Name: "Kinn LA",
          Description: "restaurant",
          LATITUDE: 34.06439220871661,
          LONGITUDE: -118.30807685851646,
          image: kinn,
          index: 2,
        },
        {
          Name: "STEEP LA",
          Description: "restaurant",
          LATITUDE: 34.06688077298084,
          LONGITUDE: -118.23572158813074,
          image: steep,
          index: 3,
        },
        {
          Name: "Daedo Sikdang",
          Description: "restaurant",
          LATITUDE: 34.064463311566975,
          LONGITUDE: -118.31078052520347,
          image: daedo,
          index: 4,
        },
      ];

      let graphics = [];
      for (let i = 0; i < data.length; i++) {
        let graphic = new Graphic({
          geometry: {
            type: "point",
            latitude: data[i].LATITUDE,
            longitude: data[i].LONGITUDE,
          },
          attributes: data[i],
        });
        graphics.push(graphic);
      }

      view.on("pointer-move", function (event) {
        view.hitTest(event).then(function (response) {
          if (response.results.length) {
            var graphic = response.results.filter(function (result) {
              return result.graphic.layer === layer;
            })[0].graphic;
            view.popup.open({
              location: event.mapPoint,
              features: [graphic],
            });
          }
        });
      });

      let popupTemplate = new PopupTemplate({
        title: () =>
          `${
            data.filter(
              (el) => view.popup.features[0].attributes.OBJECTID === el.OBJECTID
            )[0].Name
          }`,
        content: () => {
          let div = document.createElement("div");
          div.className = styles.class;
          div.style.backgroundImage = `url(${
            data.filter(
              (el) => view.popup.features[0].attributes.OBJECTID === el.OBJECTID
            )[0].image
          })`;
          return div;
        },
      });

      const layer = new FeatureLayer({
        source: graphics,
        objectIdField: "OBJECTID",
        popupTemplate: popupTemplate,
        fields: [
          {
            name: "OBJECTID",
            type: "oid",
          },
          {
            name: "image",
            type: "string",
          },
        ],
        renderer: {
          type: "simple",
          symbol: {
            type: "text",
            color: "#7A003C",
            text: "\ue661",
            font: {
              size: 20,
              family: "CalciteWebCoreIcons",
            },
          },
        },
      });

      map.add(layer);
    }
  }, []);

  return <div className={styles.webmap} ref={mapDiv}></div>;
}

export default App;
