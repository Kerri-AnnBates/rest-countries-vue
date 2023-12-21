<script setup>
import { onMounted, ref } from 'vue';
import Countries from '../components/Countries.vue';
import SearchFilter from '../components/SearchFilter.vue';
import { getLocalCountries } from '../api/index'

const countryList = ref(null);

onMounted(() => {
    getLocalCountries().then(countries => {
        countryList.value = countries;
    }).catch(err => console.log(err));
});

</script>

<template>
    <div class="container">
        <SearchFilter />
        <Countries :countryList="countryList" />
    </div>
</template>