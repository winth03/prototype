<template>
    <div class="container relative">
        <div class="relative">                
            <img class="aspect-square object-cover" :src="Images.pum">
        </div>
        <div class="container">
            <div class="text-4xl bg-pink-200 w-full p-4"><b>{{ name }}</b> {{ age }}</div>
            <div class="text-2xl bg-white w-full h-full p-4">
                <span class="text-gray-500">Type: {{ personality }}</span><br />
                <b>About me</b><br />
                <span v-if="!edit">{{ bio }}<br /><button class="bg-pink-200 p-2 border-2 border-black rounded-md" @click="handleEdit">Edit</button></span>
                <span v-else>
                    <textarea class="w-full border-2 border-gray-500" v-model="bio"></textarea><br />
                    <button class="bg-pink-200 p-2 border-2 border-black rounded-md" @click="handleEdit">Save</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Images from '@/assets/images'

const name = useCookie('name')
const personality = ref('INFJ-A')
const age = ref(18)
const bio = useCookie('bio')
const edit = ref(false)

const handleLogout = () => {
    navigateTo('/')
}

const handleEdit = () => {
    edit.value = !edit.value
}

setPageLayout('navbar')

useHead({
    title: 'inLove | Profile',
})

onBeforeMount(() => {
    if (bio.value == null || bio.value == '') {
        bio.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.'
    }
})
</script>

<style scoped>
.router-link-exact-active {
    @apply text-gray-500;
}
</style>