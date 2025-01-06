<template>
  <header>
    <h1>ابحث عن المكان الذي تحب</h1>
    <form action="get" id="search__form">
      <input class="search__input" type="text" name="Search_unit" placeholder="ابحث عن ما تريد" autofocus />
      <input class="btn__primary" type="submit" value="ابحث" />
    </form>
  </header>

  <form @submit.prevent="applyFilters">
    
      <div>
        <label for="location">Choose Location</label>
        <input type="text" id="location" v-model="filters.location" />
      </div>
      <div>
        <label for="category">Unit Category</label>
        <select id="category" v-model="filters.category">
          <option value="">Select Category</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <!-- Add more categories as needed -->
        </select>
      </div>
      <div>
        <label for="type">Unit Type</label>
        <select id="type" v-model="filters.type">
          <option value="">Select Type</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <!-- Add more types as needed -->
        </select>
      </div>
      <div>
        <label for="area">Unit Area</label>
        <input type="number" id="area" v-model="filters.area" />
      </div>
      <div>
        <label for="rooms">Number of Rooms</label>
        <input type="number" id="rooms" v-model="filters.rooms" />
      </div>
      <div>
        <label for="priceRange">Price Range</label>
        <input type="number" id="priceMin" v-model="filters.priceMin" placeholder="Min" />
        <input type="number" id="priceMax" v-model="filters.priceMax" placeholder="Max" />
      </div>
      <button type="submit">Search</button>
    </form>
  <main>
    <div v-if="results.length > 0" class="results">
      <h2>Search Results</h2>
      <ul>
        <li v-for="result in results" :key="result.id">
          {{ result.name }} - {{ result.location }} - {{ result.price }}
        </li>
      </ul>
    </div>
  </main>
  
  
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'SearchPage',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const filters = ref({
      location: '',
      category: '',
      type: '',
      area: '',
      rooms: '',
      priceMin: '',
      priceMax: ''
    });

    const results = ref([]);

    const applyFilters = () => {
      const queryString = new URLSearchParams(filters.value).toString();
      router.push({ path: '/', query: queryString });
      fetchResults();
    };

    const fetchResults = () => {
      // This is a mock function. Replace it with actual API call.
      results.value = [
        { id: 1, name: 'Unit 1', location: 'Location 1', price: '1000' },
        { id: 2, name: 'Unit 2', location: 'Location 2', price: '2000' }
      ];
    };

    watch(() => route.query, fetchResults);

    onMounted(fetchResults);

    return {
      filters,
      results,
      applyFilters
    };
  }
};
</script>

<style scoped>
.search-page {
  padding: 20px;
}
form div {
  margin-bottom: 10px;
}
.results {
  margin-top: 20px;
}
</style>
