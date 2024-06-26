<template>
    <div class="UnitCard">
        <img class="main__image" :src="unitImages[0]" alt="Main Unit Image" />
        <div class="price__wrapper">
            <h3 class="price__number">
                {{ unitPrice }}
            </h3>

            <router-link to="/contact" class="contact__link">
                <button class="btn__primary">{{ unitType }}</button>
            </router-link>
            
        </div>
        <h2>
            {{ unitTitle }}
        </h2>
        <div class="unit__specs">
                <div v-for="spec in unitSpecs" :key="spec.name" class="spec__name">

                <span class="spec-label"><font-awesome-icon :icon="spec.name" /></span>
                <span class="spec-value">{{ spec.value }}</span>
        </div>

            </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import UnitData from '../assets/TestData/UnitData.json';
import { computed } from 'vue';

const unit = ref(UnitData); // Assuming you'll fetch or receive unit data somehow

const unitTitle = computed(() => unit.value?.title || '');
const unitImages = computed(() => unit.value?.images || []);
const unitPrice = computed(() => unit.value?.price || '');
const unitType = computed(() => unit.value?.type || '');
const unitSpecs = computed(() => unit.value?.specs || []);

</script>

<style scoped>
    img{
        width:100%;

    }
</style>