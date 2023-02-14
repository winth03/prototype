<template>
    <div class="bg-main w-[100vw] h-[100vh] flex flex-col items-center">
        <div class="flex flex-col items-center h-full aspect-[9/16]">
            <slot />
            <div class="mx-auto w-fit fixed bottom-0 p-4">
                <ul class="flex text-4xl">
                    <li><NuxtLink class="px-8" to="/home">Match</NuxtLink></li>
                    <li><NuxtLink class="border-l-2 border-black px-8" to="/profile">Profile</NuxtLink></li>
                    <li><NuxtLink class="border-l-2 border-black px-8" to="/">Logout</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>