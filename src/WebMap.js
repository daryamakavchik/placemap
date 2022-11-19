import React from 'react';
import { loadModules } from 'esri-loader';

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
    .then(([ArcGISMap, MapView]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
    });
  }

  componentWillUnmount() {
    if (this.view) {
      this.view.destroy();
    }
  }

  render() {
    return (
      <div className="webmap" style={{height: '400px'}} ref={this.mapRef} />
    );
  }
}