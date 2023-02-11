<template>
    <div>
        <h1>Home</h1>
        <div>
            <img class="max-w-full rounded-full aspect-square" src="https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=">
            <ul>
                <li><b>Name:</b> {{ user_name }}</li>
                <li><b>Age:</b> {{ age }}</li>
                <li><b>Bio:</b> {{ bio }}</li>
            </ul>
        </div>
        <button class="btn" @click="handleLogout">LOGOUT <Icon name="mdi:logout-variant"/></button>
    </div>
</template>

<script setup>
const age = ref(25)
const bio = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.')
const user_name = useCookie('name')

const handleLogout = () => {
    user_name.value = null
    navigateTo('/')
}
</script>

<style scoped>

</style>