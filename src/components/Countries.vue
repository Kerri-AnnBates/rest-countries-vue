<script setup>
import CountryCard from './CountryCard.vue';

defineProps(['countryData']);
</script>

<template>
    <div class="countries">
        <div v-for="(counrty, index) in countryData" class="country" :key="index">
            <CountryCard />
        </div>
    </div>
</template>

<style lang="scss">
.countries {
    display: grid;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>