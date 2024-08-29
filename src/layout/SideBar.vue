<template>
    <aside class="sidebar">
        <owner-card></owner-card>
        <h2>إعلانات ذات صلة</h2>
        <unit-card></unit-card>
        <unit-card></unit-card>

        <a href="">مشاهدة المزيد <font-awesome-icon icon="arrow-left-long" class="link__Arrow" /> </a>
    </aside>
</template>

<script setup>
import OwnerCard from '/graduation project/3qar/3qarat/src/components/OwnerCard.vue' 
import UnitCard from '/graduation project/3qar/3qarat/src/components/UnitCard.vue'
</script>

<style lang="scss" scoped>
h2{
    text-align:center;
}
    a{
        text-decoration: none;
        color: #091638;
        font-size: 22px;
        text-align: center;
        margin-top: 10px;
        
        .link__Arrow{
            margin-right: 5px;
        }
        &:hover{
            text-decoration: underline;
        }
    }

    a:hover .link__Arrow{
        animation: slideToLeft .5s ease-in-out infinite;
    }   

    @keyframes slideToLeft {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>