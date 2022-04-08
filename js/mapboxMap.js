
      const apiKey = "AAPKf4dc74d265bb48899fdb72e51cc35bc8TEiVIYPFaoODIYsQhehnIsyYB7018WL3vfIeZunL2gXpC0IGBYP3QsJgyZE-11fr";

      const basemapEnum = "ArcGIS:Navigation";

      const ArcGISmap = new mapboxgl.Map({
        container: "MAPBOX", // the id of the div element
        style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
        zoom: 7, // starting zoom

        center: [5.460041, 52.156199] // Bunschoten-Spakenburg

      });
	  
	  
// Bunschoten-Spakenburg
const marker1 = new mapboxgl.Marker()
.setLngLat([5.380002197265643, 52.253662817244404])
.addTo(ArcGISmap);


// IJmuiden
const marker2 = new mapboxgl.Marker()
.setLngLat([4.591990646362323, 52.45853340088063])
.addTo(ArcGISmap);


// Volendam
const marker3 = new mapboxgl.Marker()
.setLngLat([5.068274, 52.496376])
.addTo(ArcGISmap);


// Urk
const marker4 = new mapboxgl.Marker()
.setLngLat([5.597982889206401, 52.661985173891466])
.addTo(ArcGISmap);

// Den Haag
const marker5 = new mapboxgl.Marker()
.setLngLat([4.267509, 52.098287])
.addTo(ArcGISmap);



      function addServiceAreaLayer() {

        ArcGISmap.addSource("servicearea", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });

        ArcGISmap.addLayer({
          id: "servicearea-fill",
          type: "fill",
          source: "servicearea",
          paint: {
            "fill-color": [
              "match",
              ["get", "FromBreak"],
              0,
              "hsl(210, 80%, 40%)",
              5,
              "hsl(210, 80%, 60%)",
              10,
              "hsl(210, 80%, 80%)",
              "transparent"
            ],
            "fill-outline-color": "black",
            "fill-opacity": 0.5
          }
        });

      }

      function addStartingPointLayer() {

        ArcGISmap.addSource("start", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }

        });
        ArcGISmap.addLayer({
          id: "start-circle",
          type: "circle",
          source: "start",

          paint: {
            "circle-radius": 6,
            "circle-color": "white",
            "circle-stroke-color": "black",
            "circle-stroke-width": 2
          }
        });

      }

      ArcGISmap.on("load", () => {
        addServiceAreaLayer();
        addStartingPointLayer();
      });

      ArcGISmap.on("click", (e) => {

        const coordinates = e.lngLat.toArray();
        const point = {
          type: "Point",
          coordinates
        };
        ArcGISmap.getSource("start").setData(point);

        const authentication = new arcgisRest.ApiKey({
          key: apiKey
        });

        arcgisRest
          .serviceArea({
            authentication,
            facilities: [coordinates]
          })

          .then((response) => {

            ArcGISmap.getSource("servicearea").setData(response.saPolygons.geoJson);

          });

      });
