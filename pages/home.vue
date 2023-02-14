<template>
    <div class="container relative">
        <div class="relative">                
            <img class="aspect-square object-cover" :src="Images.mungkud">
            <button class="absolute left-8 bottom-8 text-2xl bg-red-600 p-2 my-2 border-2"><Icon name="mdi:heart-off"/> Reject</button>
            <button class="absolute right-8 bottom-8 text-2xl bg-green-600 p-2 my-2 border-2"><Icon name="mdi:heart"/> Match</button>
        </div>
        <div class="container">
            <div class="text-4xl bg-pink-200 w-full p-4"><b>{{ name }}</b> {{ age }}</div>
            <div class="text-2xl bg-white w-full h-full p-4">
                <span class="text-gray-500">Type: {{ personality }}</span><br />
                <b>About me</b><br />
                {{ bio }}</div>
        </div>        
    </div>
</template>

<script setup>
import Images from '@/assets/images'

const name = ref('Frung Fringz')
const personality = ref('INTJ-A')
const age = ref(19)
const bio = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.')

const handleLogout = () => {
    navigateTo('/')
}

setPageLayout('navbar')

useHead({
    title: 'inLove | Home',
})
</script>

<style scoped>
.router-link-exact-active {
    @apply text-gray-500;
}
</style>