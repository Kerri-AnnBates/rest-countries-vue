<script setup>
import SearchBar from './SearchBar.vue';
</script>

<template>
    <section>
        <div className='search-filter'>
            <SearchBar />
            <!-- <FilterByRegion /> -->
        </div>
    </section>
</template>

<style lang="scss">
.search-filter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
</style>