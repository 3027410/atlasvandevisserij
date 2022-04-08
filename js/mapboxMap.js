
      const apiKey = "AAPKf4dc74d265bb48899fdb72e51cc35bc8TEiVIYPFaoODIYsQhehnIsyYB7018WL3vfIeZunL2gXpC0IGBYP3QsJgyZE-11fr";

      const basemapEnum = "ArcGIS:Navigation";

<<<<<<< HEAD
      const mapBoxmap = new mapboxgl.Map({
=======
      const ArcGISmap = new mapboxgl.Map({
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
        container: "MAPBOX", // the id of the div element
        style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
        zoom: 7, // starting zoom

        center: [5.460041, 52.156199] // Bunschoten-Spakenburg

      });
	  
	  
// Bunschoten-Spakenburg
const marker1 = new mapboxgl.Marker()
.setLngLat([5.380002197265643, 52.253662817244404])
<<<<<<< HEAD
.addTo(mapBoxmap);
=======
.addTo(ArcGISmap);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2


// IJmuiden
const marker2 = new mapboxgl.Marker()
.setLngLat([4.591990646362323, 52.45853340088063])
<<<<<<< HEAD
.addTo(mapBoxmap);
=======
.addTo(ArcGISmap);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2


// Volendam
const marker3 = new mapboxgl.Marker()
.setLngLat([5.068274, 52.496376])
<<<<<<< HEAD
.addTo(mapBoxmap);
=======
.addTo(ArcGISmap);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2


// Urk
const marker4 = new mapboxgl.Marker()
.setLngLat([5.597982889206401, 52.661985173891466])
<<<<<<< HEAD
.addTo(mapBoxmap);
=======
.addTo(ArcGISmap);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2

// Den Haag
const marker5 = new mapboxgl.Marker()
.setLngLat([4.267509, 52.098287])
<<<<<<< HEAD
.addTo(mapBoxmap);
=======
.addTo(ArcGISmap);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2



      function addServiceAreaLayer() {

<<<<<<< HEAD
        mapBoxmap.addSource("servicearea", {
=======
        ArcGISmap.addSource("servicearea", {
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });

<<<<<<< HEAD
        mapBoxmap.addLayer({
=======
        ArcGISmap.addLayer({
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
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

<<<<<<< HEAD
        mapBoxmap.addSource("start", {
=======
        ArcGISmap.addSource("start", {
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }

        });
<<<<<<< HEAD
        mapBoxmap.addLayer({
=======
        ArcGISmap.addLayer({
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
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

<<<<<<< HEAD
      mapBoxmap.on("load", () => {
=======
      ArcGISmap.on("load", () => {
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2
        addServiceAreaLayer();
        addStartingPointLayer();
      });

<<<<<<< HEAD
      mapBoxmap.on("click", (e) => {
=======
      ArcGISmap.on("click", (e) => {
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2

        const coordinates = e.lngLat.toArray();
        const point = {
          type: "Point",
          coordinates
        };
<<<<<<< HEAD
        mapBoxmap.getSource("start").setData(point);
=======
        ArcGISmap.getSource("start").setData(point);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2

        const authentication = new arcgisRest.ApiKey({
          key: apiKey
        });

        arcgisRest
          .serviceArea({
            authentication,
            facilities: [coordinates]
          })

          .then((response) => {

<<<<<<< HEAD
            mapBoxmap.getSource("servicearea").setData(response.saPolygons.geoJson);
=======
            ArcGISmap.getSource("servicearea").setData(response.saPolygons.geoJson);
>>>>>>> 7953d9e4e8ee9a7ba220d29d82168866158d27f2

          });

      });
