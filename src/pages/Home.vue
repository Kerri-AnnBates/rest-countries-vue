<script setup>
import { onMounted, ref } from 'vue';
import Countries from '../components/Countries.vue';
import SearchFilter from '../components/SearchFilter.vue';

const countryData = ref(null);

onMounted(() => {
    countryData.value = ["country1", "country2", "country3", "country4", "country5", "country6", "country7"];
});

</script>

<template>
    <div class="container">
        <SearchFilter />
        <Countries :countryData="countryData" />
    </div>
</template>