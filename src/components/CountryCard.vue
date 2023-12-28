<script setup>
defineProps(['country']);
</script>

<template>
    <!-- make params dynamic -->
    <RouterLink :to="{ name: 'CountryDetail', params: { name: 'us' } }">
        <div className="card-container">
            <div className="card-image"><img :src="country.flags.png" /></div>
            <div className="card-info">
                <h3>{{ country.name }}</h3>
                <!-- Format the population to have commas -->
                <p><span className="highlight">Population:</span> {{ country.population }}</p>
                <p><span className="highlight">Region:</span> {{ country.region }}</p>
                <p><span className="highlight">Capital:</span> {{ country.capital }}</p>
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