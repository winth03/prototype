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
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
    if (confirmPassword.value !== password.value) {
        alert('Password not match')
        return
    }

    navigateTo('home')
}
</script>

<style scoped>

</style>