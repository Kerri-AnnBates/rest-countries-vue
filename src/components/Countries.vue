<script setup>
import CountryCard from './CountryCard.vue';

defineProps(['countryList']);
</script>

<template>
    <div class="countries">
        <div v-for="(country, index) in countryList" class="country" :key="index">
            <CountryCard :country="country" />
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