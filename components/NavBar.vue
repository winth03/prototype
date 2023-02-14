<template>
    <div class="text-center p-0 mx-0 my-2">                    
        <ul class="inline m-0 p-0 divide-x-2 divide-black text-xl">
            <li><NuxtLink to="/home">Match</NuxtLink></li>
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li><NuxtLink to="/">Logout</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
li {
    @apply px-8 inline-block font-bold;
}

.router-link-exact-active {
    @apply text-gray-500;
}
</style>