    <template>
      <main>
        <section class="unit-details">

          <h1 class="unit__title">
            {{ unitTitle }}
            <!-- <font-awesome-icon :icon="['fas', 'house']"></font-awesome-icon> -->
          </h1>

          <div class="unit__images">
            <img class="main__image" :src="unitImages[0]" alt="Main Unit Image" />
             <!-- <img class="main__image" :src="getImageUrl(unitImages[0])" alt="Main Unit Image" /> -->
             <button @click="openInGoogleMaps" class="btn__primary">شاهد المزيد من الصور</button>
            <div class="sub__images">
              <img v-for="image in unitImages.slice(1, 3)" :key="image" :src="image" alt="Unit Sub Image" />
              <!-- <img v-for="image in unitImages.slice(1, 3)" :key="image" :src="getImageUrl(image)" alt="Unit Sub Image" /> -->
            </div>

          </div>

          <div class="unit__price">

            <h3 class="price__number">
              {{ unitPrice }}
              <span class="price__history">
                {{ unitCategory }}، {{ publishDate }}

              </span>

            </h3>

            <button @click="addToFavorites" class="btn__favourits"> <font-awesome-icon icon="heart"></font-awesome-icon>إضافة إلى المفضلة  </button>
          </div>

            <div class="unit__specs">
              <div v-for="spec in unitSpecs" :key="spec.name" class="spec__name">

                <span class="spec-label"><font-awesome-icon :icon="spec.name" /></span>
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
                <li v-for="feature in unitFeatures" :key="feature" class="feature__item"> <font-awesome-icon
                    :icon="feature.name" /> {{ feature.value }}</li>
              </ul>
            </div>
            <h2>الموقع </h2>
            <div class="unit__location">
              <location-component></location-component>
            </div>

            <h2>شاهد أيضا </h2>
            <div class="units__wrapper">
              <div class="otherunit">
                <p>شاليهات للإيجار</p>
                <font-awesome-icon icon="circle-chevron-left" class="left_arrow"/>
              </div>
              <div class="otherunit">
                <p>شقق للإيجار </p>
                <font-awesome-icon icon="circle-chevron-left" class="left_arrow"/>
              </div>
              <div class="otherunit">
                <p>شقق للبيع</p>
                <font-awesome-icon icon="circle-chevron-left" class="left_arrow"/>
              </div>
              <div class="otherunit">
                <p>فلل للبيع</p>
                <font-awesome-icon icon="circle-chevron-left" class="left_arrow"/>
              </div>
            </div>
            
          </section>
          <side-bar></side-bar>
        </section>
      </main>
      <footer-layout></footer-layout>
    </template>

<script setup>
import { ref, computed, provide} from 'vue';
import UnitData from '../../../public/TestData/UnitData.json';

import SideBar from '../../layout/SideBar.vue';
import FooterLayout from '../../layout/FooterLayout.vue';
import LocationComponent from '../../components/LocationComponent.vue';

const unit = ref(UnitData); // Assuming you'll fetch or receive unit data somehow

const unitTitle = computed(() => unit.value?.title || '');
const unitImages = computed(() => unit.value?.images || []);
const unitPrice = computed(() => unit.value?.price || '');
const publishDate = computed(() => unit.value?.date || '');
const unitCategory = computed(() => unit.value?.Category || '');
const unitSpecs = computed(() => unit.value?.specs || []);
const description = computed(() => unit.value?.description || '');

const unitFeatures = computed(() => unit.value?.features || []);  // Assuming you'll have features data

function addToFavorites() {
  // Implement logic to add unit to favorites (local storage or API)
  console.log("Adding unit to favorites:", unitTitle.value);
}


const OwnerData = computed(() => unit.value?.OwnerData || {}); // Assuming you'll fetch or receive unit data somehow

// Owner computed properties
const unitOwnerName = computed(() => OwnerData.value?.Name || 'Unknown Owner');
const unitOwnerImage = computed(() => OwnerData.value?.Image || '/default-image.jpg');
const unitOwnerTitle = computed(() => OwnerData.value?.Title || 'No Title');
const unitOwnerLocation = computed(() => OwnerData.value?.Location || 'No Location');
const unitOwnerRating = computed(() => OwnerData.value?.Rating || 'No Rating');

// Provide Owner data to child components
provide('OwnerData', {
  unitOwnerName,
  unitOwnerImage,
  unitOwnerTitle,
  unitOwnerLocation,
  unitOwnerRating,
});

</script>

<style lang="scss" scoped>
/* Add your styles here for unit-page, unit-details, etc. */
main {
  padding: 2% 5%;
}

.unit__title {
  /* text-align: right; */
  font-size: 56px;
  font-weight: 600;
}

img {
  border-radius: 8px;
  cursor: pointer;
  transition: all .5s;
}

img:hover {
  box-shadow: 0 0 25px 0px #00000037;
  scale: 1.01;
}

.unit__images {
  position: relative;
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

.unit__price {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 36px;

    .price__history {
      font-weight: 400;
      font-size: 16px;
      margin: -10px 0px 15px 0px;
    }
  }
}

.unit__specs {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 50px;

  .spec__name {
    width: 180px;
    height: 40px;
    border: 1px solid #D7D7D7;
    border-radius: 8px;

    .spec-label {
      margin-left: 10px;
      color: #091638;
      font-size: 20px;
      border-left: 1px solid #D7D7D7;
      padding: 0 10px;
    }

    .spec-value {
      color: #8E8E8E;
      font-size: 20px;
      // padding: 0 10px; 
    }
  }

}

.Second__grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  .unit__description {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .description {
      width: 80%;
      font-size: 20px;
      font-weight: 400;
      color: #091638;
    }

    .features__list {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: start;
      flex-wrap: wrap;
      gap: 10%;
      width: 100%;

      li {
        width: 40%;
        /* Set width to 50% of its container */
        padding: 10px;
        margin: 5px;
        /* Optional styling for each feature item */
        text-align: center;
        height: 40px;
        border-radius: 8px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        gap:20px;
        font-size: 20px;
      }
    }
  }
}
.units__wrapper{
  display: flex;
  flex-direction: column;
  gap:20px;

}
.otherunit{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 60px;
  background-color:#FFFAFA;
  font-size: 20px;  
  color: #091638;
  border-radius: 8px;
  padding: 0px 10px;
  box-shadow: 0 0 25px 0px #00000025;
  cursor: pointer;
  transition: all .5s;
  &:hover{
    box-shadow: 0 0 25px 0px #00000037;
    transform: scale(1.01);
  }
  .left_arrow{
    font-size: 32px;
    background-color:white;
    color:#091638;;
  }
}
.otherunit:hover .left_arrow{
  animation: slideToLeft .7s ease-in-out infinite;
}

.btn__primary{
  position: absolute;
  top:90%;
  left:0%;
  z-index:1;
  height: 35px;
  background: #FFFAFA;
  color: #091638;
  font-size: 14px !important;
  width: auto;
}


@keyframes slideToLeft {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-20%);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>


