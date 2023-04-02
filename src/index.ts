import * as L from 'leaflet';
import 'leaflet-draw';

const map = L.map('map').setView([0, 0], 2);

// Remove the default OpenStreetMap layer
map.removeLayer((map as any)._layers[Object.keys((map as any)._layers)[0]]);

// "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"


L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18,
}).addTo(map);



const drawControl = new L.Control.Draw({
    draw: {
        polyline: false,
        circle: false,
        marker: false,
        circlemarker: false,
    },
    edit: {
        featureGroup: new L.FeatureGroup(),
    },
});
map.addControl(drawControl);

const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

map.on('draw:created', (e: any) => {
    const layer = e.layer;
    drawnItems.addLayer(layer);
});

map.on('draw:deletestop', () => {
    drawnItems.clearLayers();
});

function downloadGeoJSON(geojson: object) {
    const dataStr = JSON.stringify(geojson);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', 'polygon.geojson');
    link.click();
}

const downloadButton = document.getElementById('download') as HTMLButtonElement;
downloadButton.addEventListener('click', () => {
    const geojson = drawnItems.toGeoJSON();
    downloadGeoJSON(geojson);
});