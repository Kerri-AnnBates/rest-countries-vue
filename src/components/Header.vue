<script setup>
defineProps(['isDarkMode']);
defineEmits(['toggleDarkMode']);
</script>

<template>
    <header>
        <div className='container'>
            <div className='flex-header'>
                <h1>Where in the world?</h1>
                <button @click="$emit('toggleDarkMode')">Dark Mode: {{ isDarkMode }}</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
// Variables
$white: #fff;

header {
    box-shadow: 0 7px 10px -9px #4d4d4d;
    padding: 20px 0;

    button {
        background-color: $white;
        padding: 5px;
        border: none;
        display: flex;
        align-items: center;
        box-shadow: none;

        svg {
            margin-right: 3px;
        }

        &:hover {
            cursor: pointer;
        }

        @media screen and (min-width: 800px) {
            padding: 8px;
        }
    }
}

.flex-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>