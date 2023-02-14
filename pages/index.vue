<template>
    <div class="container bg-main-index relative">
        <!-- <h1 class="text-[#ff83a8] text-6xl font-bold font-nick">inLove</h1> -->
        <div class="max-h-fit max-w-fit absolute top-[63%] left-[25%]">
            <ul class="text-left">
                <li><NuxtLink to="login">LOGIN <Icon name="mdi:login-variant"/></NuxtLink></li>
                <li><NuxtLink to="register">REGISTER <Icon name="mdi:account"/></NuxtLink></li>
                <li><NuxtLink to="about">ABOUT <Icon name="mdi:information-outline"/></NuxtLink></li>
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