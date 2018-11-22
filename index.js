import 'ol/ol.css'

import {Map, View} from 'ol'

import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
})
