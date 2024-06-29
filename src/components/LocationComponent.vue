<template>
    <div ref="mapContainer" class="map-container"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const mapContainer = ref(null);
  
  const initializeMap = () => {
    const mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
    };
    const map = new google.maps.Map(mapContainer.value, mapProp);
  };
  
  onMounted(() => {
    if (typeof google !== 'undefined') {
      initializeMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    }
  });
  </script>
  
  <style>
  .map-container {
    width: 100%;
    height: 400px; /* Adjust the height as needed */
  }
  </style>
  