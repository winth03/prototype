<template>
    <div class="flex flex-col">
        <form @submit.prevent="handleLogin">
            <div class="flex flex-col">
                <label for="email">Email or Username</label>
                <input required type="text" id="email" name="email" v-model="email" />
            </div>
            <div class="flex flex-col">
                <label for="password">Password</label>
                <input required type="password" id="password" name="password" v-model="password" />
            </div>
            <div class="flex flex-col">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')

const handleLogin = () => {
    if (email.value === 'admin' || password.value === 'admin') {
        navigateTo('home')
    }
}
</script>

<style scoped>

</style>