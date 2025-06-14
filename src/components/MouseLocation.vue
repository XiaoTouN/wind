<script setup>
import { inject, onMounted, ref } from 'vue'
import emitter from '@/emitter.js'

let map = null

const lng = ref(null)
const lat = ref(null)
const zoom = ref(null)
emitter.on('onMapLoad', (value) => {
  map = value
  map.on('mousemove', (e) => {
    lng.value = e.lngLat.lng.toFixed(4)
    lat.value = e.lngLat.lat.toFixed(4)
    zoom.value = map.getZoom().toFixed(1)
  })
})
</script>

<template>
  <div class="mouse-location">
    <span>{{ lng }}</span>
    &nbsp;&nbsp;
    <span>{{ lat }}</span>
    &nbsp;&nbsp;
    <span>{{ zoom }}</span>
  </div>
</template>

<style scoped>
.mouse-location {
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 0.8em;
  color: #d3d3d3;
  padding: 4px;
  background: #ffffff88;
  border-radius: 4px;
  border: 2px solid #ffffff44;
}
</style>
