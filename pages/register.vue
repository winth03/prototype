<template>
    <div class="flex flex-col">
        <form @submit.prevent="handleRegister">
            <div class="flex flex-col">
                <label for="name">Name</label>
                <input required type="text" id="name" name="name" v-model="name" />
            </div>
            <div class="flex flex-col">
                <label for="email">Email or Username</label>
                <input required type="text" id="email" name="email" v-model="email" />
            </div>
            <div class="flex flex-col">
                <label for="password">Password</label>
                <input required type="password" id="password" name="password" v-model="password" />
            </div>
            <div class="flex flex-col">
                <label for="confirmPassword">Confirm Password</label>
                <input required type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword" />
            </div>
            <div class="flex flex-col">
                <label for="personality">Personality Type</label>
                <button class="dropdown" @click="handleDropdown">{{ user_personality || "Select One" }}</button>
                <ul v-if="dropdown">
                    <li v-for="personality in personalities"><button type="button" @click="handlePersonality(personality)">{{ personality }}</button></li>
                </ul>
            </div>
            <div class="flex flex-col">
                <button class="btn" type="submit">REGISTER</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const user_name = useCookie('name')
const user_personality = useCookie("personality")
const personalities = ["ISTJ", "INFJ", "INTJ", "ENFJ", "ENTJ", "ISTP", "ISFJ", "INTP", "ENFP", "ENTP", "ISFP", "ESFJ", "ESTJ", "ESFP", "ESTP"]
const dropdown = ref(false)

const handleDropdown = () => {
    dropdown.value = !dropdown.value
}

const handlePersonality = (personality) => {
    user_personality.value = personality
    dropdown.value = false
}

const handleRegister = () => {
    if (confirmPassword.value !== password.value) {
        alert('Password not match')
        return
    }

    user_name.value = name.value
    navigateTo('home')
}
</script>

<style scoped>
.dropdown {
    @apply border-2 bg-white border-gray-600 rounded-md;
}

ul {
    @apply bg-white divide-y-2 divide-gray-600;
}

button {
    @apply w-full h-full text-left;
}
</style>