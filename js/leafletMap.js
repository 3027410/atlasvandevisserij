var map = L.map('LEAFLET', {center: [49.17362371108846, -122.9692840576172],zoom: 11, maxZoom: 12,minZoom: 9});
	L.tileLayer('https://api.mapbox.com/styles/v1/3027410/ckiwapns74mw219qowh0oqe8f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiMzAyNzQxMCIsImEiOiJjazQ5eWpibWowOWxvM2twYnp6aXNkdWdmIn0.uzKMav-HM8sMvEQ0uyvsFQ',)

	.addTo(map);
	map.scrollWheelZoom.disable()
	

	
	var geoJsonLayer = L.geoJson(turf , {
    color: '#31bef0',
    fillOpacity: 0.8,
    radius: 500,
	stroke: 0
}).addTo(map);
	var geoJsonLayer = L.geoJson(visvogelvoedsel , {
    color: '#ea763e',
    fillOpacity: 0.5,
    radius: 500,
	stroke: 0
}).addTo(map);
	var geoJsonLayer = L.geoJson(voedselgebied , {
    color: '#ea763e',
    fillOpacity: 0.8,
    radius: 500,
	stroke: 0
}).addTo(map);
	var geoJsonLayer = L.geoJson(delta , {
    color: '#207292',
    fillOpacity: 0.25,
    radius: 500,
	stroke: 0
}).addTo(map);


                  var icoonmeetpunt = L.icon({
    iconUrl: '../../images/vismeetpunt.png',

    iconSize:     [70, 34], // size of the icon
    shadowSize:   [50, 62], // size of the shadow
    iconAnchor:   [45, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 62],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([49.182601048138054,-122.00351715087892], {icon: icoonmeetpunt}).addTo(map);
marker.bindPopup("<b>Chilliwack: 25,168</b>");

var marker = L.marker([49.278332669948995,-122.70149230957033], {icon: icoonmeetpunt}).addTo(map);
marker.bindPopup("<b>Pitt/ Alouette/ Coquitlam: 8,757</b>");

var marker = L.marker([49.33088363029654,-122.91538238525392], {icon: icoonmeetpunt}).addTo(map);
marker.bindPopup("<b>Nadina/ Gates/ Bowron/ Nahatlatch/ Taseko: 31,283</b>");

var marker = L.marker([49.22656646440612,-122.76088714599611], {icon: icoonmeetpunt}).addTo(map);
marker.bindPopup("<b>Thompson: 2,956</b>");


/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legendaLeaflet");
  div.innerHTML += "<h4>Legenda</h4>";
  div.innerHTML += '<i style="background: rgba(32, 114, 146, 0.25)"></i><span>Deltagebied</span><br>';
  div.innerHTML += '<i style="background: #48b1d8"></i><span>Turfgronden</span><br>';
  div.innerHTML += '<i style="background: rgba(234, 119, 62, 1)"></i><span>Voedselgebied migrerende vissen en vogels</span><br>';
  div.innerHTML += '<i style="background: rgba(234, 119, 62, 0.7)"></i><span>Minder voedselrijk gebied</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: src(images/vismeetpunt.png);background-repeat: no-repeat;vertical-align:middle;"></i><span>Vismeetpunten migratie Sockeye Zalm - vroege zomer 2020</span><br>';
  div.innerHTML += '<h3>Bronnen:</h3>';
  div.innerHTML += '<span> <a href="https://www.psc.org/wpfd_file/fraser-river-sockeye-escapement-by-stock-group/" target="_blank">Pacific Salmon Commision</a></span><br>';
  div.innerHTML += '<span> <a href="https://www.researchgate.net/figure/Surfi-cial-geology-of-Fraser-River-delta-and-greater-Vancouver-region-Surfi-cial-geology_fig1_249521743" target="_blank">Researchgate</a></span><br>';

  return div;
};

legend.addTo(map);



	