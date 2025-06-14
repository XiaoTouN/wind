<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted, provide, ref, shallowRef } from 'vue'
import { addImageWind, addBitmapWind } from '@/util/wind'
import picUrl from '../dataSource/small[-21,-70][121,10].png'
import ToolBar from '@/components/ToolBar.vue'
import MouseLocation from '@/components/MouseLocation.vue'
import emitter from '@/emitter'

mapboxgl.accessToken =
  'pk.eyJ1IjoiamZycW5rYXV0aCIsImEiOiJjbWFnczNsY2EwNDY1MnNzMzBvcDJldTlqIn0.ZMud8As5Nuq0PCJT03lS4A'

let map: mapboxgl.Map = null
onMounted(() => {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/satellite/style.json?key=yrI63Jl1lBD3vuaOlRPO',
    center: [106.56,33.2],
    zoom: 3,
    maxZoom: 13,
    minZoom: 2,
  })
  map.on('load', () => {
    emitter.emit('onMapLoad',map)
    addImageWind(
      'windLayer',
      map,
      picUrl,
      [
        [73, 6],
        [140, 54],
      ],
      true,
    )
  })
  map.on('click', (e) => {
    console.log([e.lngLat.lng, e.lngLat.lat], map.getZoom())
  })
})
</script>

<template>
  <div class="wind">
    <div class="map-container" id="map"></div>
    <ToolBar></ToolBar>
    <MouseLocation></MouseLocation>
  </div>
</template>

<style scoped>
.wind {
  width: 100%;
  height: 100%;
  position: relative;

  .map-container {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
