import 'ol/ol.css'

import {
  FullScreen,
  OverviewMap,
  defaults as defaultControls
} from 'ol/control'
import {
  Map,
  View
} from 'ol'

import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

const u = new URL(window.location.href)

// url
const t = u.searchParams.get('url')
const url = `${t}/{z}/{x}/{y}.jpg`

// ppt: pixel per tile, default 256
const ppt = +u.searchParams.get('ppt') || 256

// mz, default 5
const maxZoom = +u.searchParams.get('mz') || 4

// zoom to fit window
const mapDiv = document.getElementById('map')
const divWidth = mapDiv.clientWidth
const divHeight = mapDiv.clientHeight
const shortSize = Math.min(divWidth, divHeight)
const fitZoom = Math.min(maxZoom, Math.floor(Math.log(shortSize / ppt) / Math.log(2)))

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
  controls: defaultControls().extend([
    new FullScreen(),
    new OverviewMap()
  ]),
  view: new View({
    center: [0, 0],
    zoom: fitZoom,
    maxZoom
  })
})

map.render()
