<script setup>
import CountryCard from './CountryCard.vue';
import { ref } from "vue";

const countryList = ref([1, 2, 3, 4, 5, 6, 7])
</script>

<template>
    <div class="countries">
        <div v-for="(counrty, index) in countryList" class="country">
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