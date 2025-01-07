<template>
  <div class="Owner__card">
    <h3>التواصل مع البائع</h3>
    <div class="Owner__details">
      <img class="Owner__details--image" :src="unitOwnerImage">
      <p class="Owner__details--Name">{{ unitOwnerName }}
        <span class="Owner__details--title">{{ unitOwnerTitle }}</span>
      </p>
      <div class="Owner__details--rating">{{ unitOwnerRating }}</div>
      <p class="Owner__details--location">{{ unitOwnerLocation }}</p>
      <div class="Owner__details--Contact">
        <button class="btn__primary">رسالة</button>
        <button class="btn__primary">رقم الهاتف</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import UnitData from '../assets/TestData/UnitData.json';
import { computed } from 'vue';

const Owner = ref(UnitData?.OwnerData || {}); // Assuming you'll fetch or receive unit data somehow

const unitOwnerName = computed(() => Owner.value?.Name || '');
const unitOwnerImage = computed(() => Owner.value?.Image || []);
const unitOwnerTitle = computed(() => Owner.value?.Title || '');
const unitOwnerLocation = computed(() => Owner.value?.Location || '');
const unitOwnerRating = computed(() => Owner.value?.Rating || []);

</script>

<style scoped>
  img{
      width:100%;

  }
</style>