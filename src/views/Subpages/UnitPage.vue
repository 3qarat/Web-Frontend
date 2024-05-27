<template>
  <main>
    <section class="unit-details">

      <h1 class="unit__title">
        {{ unitTitle }}
      </h1>

      <div class="unit__images">
        <img class="main__image" :src="unitImages[0]" alt="Main Unit Image" />

        <div class="sub__images">
          <img v-for="image in unitImages.slice(1, 3)" :key="image" :src="image" alt="Unit Sub Image" />
        </div>

      </div>

      <div class="unit__price">

      <h3 class="price__number">
        {{ unitPrice }}
        <span class="price__history">
         {{ unitType }}، {{ publishDate }}

        </span>

      </h3> 

        <button @click="addToFavorites" class="btn__favourits">إضافة إلى المفضلة</button>
      </div>

      <div class="unit__specs">
        <div v-for="spec in unitSpecs" :key="spec.name" class="spec__name">
          
          <span class="spec-label"><i :class="spec.name"></i></span>
          <span class="spec-value">{{ spec.value }}</span>
        </div>

      </div>
    </section>

    <section class="Second__grid">
      <section class="unit__description">
        <h2>التفاصيل</h2>
        <p class="description">
            {{ description }}
        </p>
        <h2>المزايا </h2>
        <div class="features">
          <ul class="features__list">
            <li v-for="feature in unitFeatures" :key="feature" class="feature__item">{{ feature.value }}</li>
          </ul>
        </div>

      </section>
     <side-bar></side-bar>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import UnitData from '/graduation project/3qar/3qarat/public/TestData/UnitData.json'
import { computed } from 'vue';

import SideBar from '../../components/layout/SideBar.vue';

const unit = ref(UnitData); // Assuming you'll fetch or receive unit data somehow

const unitTitle = computed(() => unit.value?.title || '');
const unitImages = computed(() => unit.value?.images || []);
const unitPrice = computed(() => unit.value?.price || '');
const publishDate = computed(() => unit.value?.date || '');
const unitType = computed(() => unit.value?.type || '');
const unitSpecs = computed(() => unit.value?.specs || []);
const description = computed(() => unit.value?.description || '');

const unitFeatures = computed(() => unit.value?.features || []);  // Assuming you'll have features data

function addToFavorites() {
  // Implement logic to add unit to favorites (local storage or API)
  console.log("Adding unit to favorites:", unitTitle.value);
}
</script>

<style lang="scss" scoped>
  /* Add your styles here for unit-page, unit-details, etc. */
      main {
        padding: 2% 5%;
      }
      .unit__title{
        /* text-align: right; */
        font-size: 56px;
        font-weight: 600;
      }

      img {
        
        border-radius: 8px;
        cursor: pointer;
        transition: all .5s;
      }
      img:hover{
          box-shadow: 0 0 25px 0px #00000037;
          scale: 1.01;
      }

      .unit__images {
        display: flex;
        flex-direction: row;
        gap: 15px;
      }
      .main__image {
        width: 65%;
        height: auto;
      }
      .sub__images {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        width: 35%;
      }

      .unit__price{
        margin-top: 20px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;

        h3{
          display: flex;
          flex-direction: column;
          font-size: 36px;
          .price__history{
            font-weight: 400;
            font-size: 16px;
            margin: -10px 0px 15px 0px;
          }
        }
        .btn__favourits{
          width: 150px;
          height: 40px;
          background:none;
          border: 1px solid #1C3988;
          border-radius: 8px;
          cursor: pointer;
          transition: all .5s;
        }
      }
      .unit__specs{
        display:flex;
        flex-direction: row;
        justify-content: start;
        gap: 50px;
        
          .spec__name{
          width: 180px;
          height: 40px;
          border: 1px solid #D7D7D7;
          border-radius: 8px;
          
          .spec-label{
              margin-left: 10px;
              color: #091638;
              font-size:20px;
              border-left: 1px solid #D7D7D7;
              padding: 0 10px;
          }
          .spec-value{
              color:#8E8E8E;
              font-size:20px;
              // padding: 0 10px; 
          }
        }

      }

      .Second__grid{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;

        .unit__description{
          width: 60%;

          .description{
            width:80%;
            font-size: 20px;
            font-weight: 400;
            color: #091638;
          }

          .features__list{
            list-style: none;
            display:flex;
            flex-direction: row;
            justify-content: start;
            flex-wrap: wrap;
            gap: 10%;
            width: 80%;

            li{
              width:40%; /* Set width to 50% of its container */
              padding: 10px;
              margin: 5px;
              border: 1px solid #ddd; /* Optional styling for each feature item */
              text-align: center; 
              height: 40px;
              border-radius: 8px;
            }
          }
        }
      }
</style>


