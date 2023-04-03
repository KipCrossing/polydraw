# Leaflet Map with Polygon Drawing and GeoJSON Export

This repository contains a frontend-only TypeScript-based web application that allows users to interact with a map, draw polygons, and export them as GeoJSON files. The application uses the Leaflet library for map rendering and interaction, and the Mapbox API for the satellite imagery layer.

## Features

- Interactive map with zoom and pan functionality
- Ability to draw polygons by clicking points on the map
- Export drawn polygons as a GeoJSON file
- Clear polygons from the map

## Prerequisites

- Node.js and npm

## Setup

1. Navigate to the project folder and install dependencies:

`npm install`


2. Run:

`npm start`

### Some datasets:

- https://registry.opendata.aws/terrain-tiles/
- https://registry.opendata.aws/silam/

#### For getting zarr data from s3 and loading it in

`npm install zarr numcodecs`