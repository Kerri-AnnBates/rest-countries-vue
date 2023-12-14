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
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
}

.country {
    // flex-shrink: 0;
    // flex-grow: 0;
    margin-left: 50px;
    margin-bottom: 50px;
}
</style>