<template>
    <div class="owner__card">
      
        <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Title -->
      <div class="bg-blue-500 text-white text-center py-3 font-bold text-xl">
        <h3>التواصل مع البائع  </h3>
      </div>
      
      <!-- Image and Name -->
      <div class="flex items-center px-6 py-4">
        <img
          :src="image"
          alt="Profile Image"
          class="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <p class="font-semibold text-lg">{{ name }}</p>
        </div>
      </div>
  
      <!-- Evaluation (Stars) -->
      <div class="flex justify-center items-center py-2">
        <template v-for="n in 5" :key="n">
          <svg
            v-if="n <= rating"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6 text-yellow-500"
          >
            <path d="M12 .587l3.668 7.431 8.213 1.193-5.94 5.785 1.402 8.175-7.343-3.859-7.344 3.859 1.402-8.175-5.94-5.785 8.213-1.193z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 text-gray-300"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.25l2.44 4.935 5.426.79-3.931 3.827.927 5.408L12 15.912l-4.862 2.558.927-5.408-3.931-3.827 5.426-.79L12 4.25z"
            />
          </svg>
        </template>
      </div>
  
      <!-- Location -->
      <div class="px-6 py-2 text-gray-600">
        <p class="text-center">{{ location }}</p>
      </div>
  
      <!-- Buttons -->
      <div class="flex justify-evenly px-6 py-4">
        <button
          @click="onView"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          View
        </button>
        <button
          @click="onMessage"
          class="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
        >
          Message
        </button>
      </div>
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'ProfileCard',
    props: {
      title: {
        type: String,
        default: 'Profile Card',
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      location: {
        type: String,
        required: true,
      },
    },
    methods: {
      onView() {
        alert('View button clicked!');
      },
      onMessage() {
        alert('Message button clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  