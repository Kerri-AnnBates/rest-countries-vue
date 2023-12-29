<script setup>
import { onMounted, ref } from 'vue';
import Countries from '../components/Countries.vue';
import SearchFilter from '../components/SearchFilter.vue';
import { getLocalCountries, getCountries } from '../api/index';

const countryList = ref(null);

onMounted(() => {
    // getCountries()
    //     .then(res => {
    //         // Let's sort list first

    //         countryList.value = res.data
    //     })
    //     .catch(err => console.log(err))

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