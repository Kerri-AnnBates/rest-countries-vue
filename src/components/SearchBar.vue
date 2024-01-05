<script setup>
import { ref } from 'vue';

const searchTerm = ref("");

</script>
<template>
    <div className='search-container'>
        <!-- Search Icon here -->
        <v-icon icon="mdi-magnify" color="black"></v-icon>
        <input v-model="searchTerm" type="search" name="search" id="search" placeholder='Search for a country...' autocomplete="off" />
    </div>
</template>

<style lang="scss">
.search-container {
    position: relative;
    margin: 20px 0;
    max-width: 500px;
    width: 100%;

    input {
        width: 100%;
        padding: 20px 40px;
        border-radius: 5px;
        border: none;
        -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    }
}

.search-icon {
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    position: absolute;
}
</style>