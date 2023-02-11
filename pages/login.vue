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
                <button class="btn" type="submit">LOGIN <Icon name="mdi:login-variant"/></button>
            </div>
        </form>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const user_name = useCookie('name')

const handleLogin = () => {
    if (email.value === 'admin' || password.value === 'admin') {
        user_name.value = 'Admin User'
        navigateTo('home')
    }
}
</script>

<style scoped>

</style>