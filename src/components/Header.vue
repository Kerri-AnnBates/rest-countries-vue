<script setup>
defineProps({
    isDarkMode: {
        type: Boolean
    }
})
</script>

<template>
    <header>
        <div className='container'>
            <div className='flex-header'>
                <h1>Where in the world?</h1>
                <button>Dark Mode</button>
            </div>
        </div>
    </header>
</template>