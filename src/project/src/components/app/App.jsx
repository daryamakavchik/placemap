import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import Search from "@arcgis/core/widgets/Search";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import * as locator from "@arcgis/core/rest/locator";
import Locate from "@arcgis/core/widgets/Locate";
import esriConfig from "@arcgis/core/config";
import { data } from "../../mock-data";
import styles from "./app.module.css";
import icon from '../../images/icon.png';
import closeic from '../../images/closeic.png';

function App() {
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) { 
      esriConfig.apiKey = "AAPKff271af86e5e4145ae46098747021260kqF_X1V0Z8FSN9TJcZbqceQjUdHGDJ11-hNCPx8t2CVvrp_Lvbd5S64hXMVFd_CO";
      const serviceUrl = "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

      const map = new Map({ basemap: "osm-dark-gray" });
      const view = new MapView({
        map: map,
        center: [-118.243683, 34.052235],
        zoom: 13,
        container: mapDiv.current,
      });

      document.body.classList.add("nopointer");

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
        document.querySelector(".esri-ui-manual-container").classList.add("overlay");
      });
      view.popup.watch("visible", function (visible) {
        document.querySelector(".esri-ui-manual-container").classList.remove("overlay");
        view.ui.remove(search);
        document.body.classList.remove("nopointer");
      });

      
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
              return result.graphic && result.graphic.layer && result.graphic.layer === layer;
            })[0].graphic;
            view.popup.open({
              location: graphic.geometry.centroid,
              features: [graphic],
            });
            view.popup.highlightEnabled = false;
          }
        });
      });

      let popupTemplate = new PopupTemplate({
        title: () =>`${ data.filter((el) => view.popup.features[0].attributes.OBJECTID === el.OBJECTID)[0].Name }`,
        content: () => {
          let div = document.createElement("div");
          div.className = styles.class;
          div.style.backgroundImage = `url(${data.filter((el) => view.popup.features[0].attributes.OBJECTID === el.OBJECTID)[0].image})`;
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
        ],
        renderer: {
          type: "simple",
          declaredClass: 'zindex',
          symbol: {
            type: "picture-marker",
          url: icon,
          width: "70px",
          height: "70px",
          },
        },
      });

      map.add(layer);
    }
  }, []);

  return <div className={styles.webmap} ref={mapDiv}><button className={styles.closebutton}><img className={styles.closeicon} src={closeic} /></button></div>;
}

export default App;
