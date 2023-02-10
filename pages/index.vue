<template>
    <div class="flex flex-col items-center text-center py-36 space-y-36">
        <h1 class="text-red-500 text-4xl font-bold">inLove<br/>App</h1>
        <div class="flex max-h-fit max-w-fit bg-white p-8 rounded-md">
            <ul class="text-left">
                <li><NuxtLink to="login">Login <Icon name="mdi:login-variant"/></NuxtLink></li>
                <li><NuxtLink to="register">Register <Icon name="mdi:account"/></NuxtLink></li>
                <li><NuxtLink to="about">About <Icon name="mdi:information-outline"/></NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
li {
    @apply text-2xl;
}
</style>