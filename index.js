import 'ol/ol.css'

import {
  Map,
  View
} from 'ol'

import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

const u = new URL(window.location.href)
const t = u.searchParams.get('url')
const url = `${t}/{z}/{x}/{y}.jpg`

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url,
        wrapX: false
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
})

map.render()
