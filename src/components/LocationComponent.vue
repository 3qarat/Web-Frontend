<template>
  <div class="map__wrapper">
    <div ref="mapContainer" style="height: 400px;"></div>
    <button @click="openInGoogleMaps" class="btn__primary">فتح في خرائط جوجل</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

const props = defineProps(['lat', 'lng']);

const mapContainer = ref(null);
let map = null;

// Function to load Google Maps
const loadGoogleMaps = () => {
  const google = window.google;
  map = new google.maps.Map(mapContainer.value, {
    center: { lat: props.lat, lng: props.lng },
    zoom: 15
  });

  // Optional: Add a marker
  new google.maps.Marker({
    position: { lat: props.lat, lng: props.lng },
    map: map,
    title: 'Real Estate Unit Location'
  });
};

// Function to open location in Google Maps website
const openInGoogleMaps = () => {
  const url = `https://www.google.com/maps/search/?api=1&query=${props.lat},${props.lng}`;
  window.open(url, '_blank');
};
onMounted(() => {
  // Load Google Maps API
  const loader = new Loader({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries: ['places']
  });

  loader.load().then(() => {
    loadGoogleMaps();
  });
});
</script>

<style scoped>
/* Optional: Add styles for map container */
#mapContainer {
  height: 400px;
}
.map__wrapper {
  position: relative;
  width:80%;
}
.btn__primary{
  position: absolute;
  top:0%;
  left:0%;
  z-index:1;
  font-size: 12px !important;
  width: 150px;
}
</style>
