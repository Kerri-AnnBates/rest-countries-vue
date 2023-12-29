<script setup>
import { computed } from 'vue';

const { country } = defineProps(['country']);

const countryName = computed(() => {
    // Update country name to follow v3 api or to local data
    return country.name.common ? country.name.common : country.name;
});

const capital = computed(() => {
    let capital = country.capital;

    if (!capital) return "";

    // check if array to match v3 api
    if (capital && typeof capital != 'string') {
        capital = capital[0];
    }

    return capital;
});

</script>

<template>
    <!-- make params dynamic -->
    <RouterLink :to="{ name: 'CountryDetail', params: { name: 'us' } }">
        <div className="card-container">
            <div className="card-image"><img :src="country.flags.png" /></div>
            <div className="card-info">
                <h3>{{ countryName }}</h3>
                <!-- Format the population to have commas -->
                <p><span className="highlight">Population:</span> {{ country.population }}</p>
                <p><span className="highlight">Region:</span> {{ country.region }}</p>
                <p><span className="highlight">Capital:</span> {{ capital }}</p>
            </div>
        </div>
    </RouterLink>
</template>

<style lang="scss">
.card-container {
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
}

.card-image {
    position: relative;

    img {
        border-radius: 5px 5px 0 0;
        width: 100%;
    }
}

.card-info {
    padding: 20px;
}
</style>