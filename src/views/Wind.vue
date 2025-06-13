<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import {onMounted} from 'vue'
import {addImageWind} from '@/util/wind'
import picUrl from '../dataSource/small[-21,-70][121,10].png'

mapboxgl.accessToken =
    'pk.eyJ1IjoiamZycW5rYXV0aCIsImEiOiJjbWFnczNsY2EwNDY1MnNzMzBvcDJldTlqIn0.ZMud8As5Nuq0PCJT03lS4A'

let map: mapboxgl.Map = null
console.log("Hello")
onMounted(() => {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/satellite/style.json?key=yrI63Jl1lBD3vuaOlRPO',
    center: [106.63, 30],
    zoom: 2,
  })
  map.on('load', () => {
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
})
</script>

<template>
  <div class="wind" id="map"></div>
</template>

<style scoped>
.wind {
  width: 100%;
  height: 100%;
  background: antiquewhite;
}
</style>
