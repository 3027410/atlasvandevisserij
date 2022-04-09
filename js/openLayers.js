      var map = new ol.Map({
        target: 'openLayersmap',
		interactions: ol.interaction.defaults({mouseWheelZoom:false}),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor',})
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
	  
	  
	  
var point = new OpenLayers.LonLat( -0.1279688 ,51.5077286 ).transform(
    new OpenLayers.Projection("EPSG:4326"),
    map.getProjectionObject());

var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

markers.addMarker(new OpenLayers.Marker(point));