<template>
    <div>
        <h1>Home</h1>
        <div>
            <img src="https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=">
            <ul>
                <li>Name: {{ name }}</li>
                <li>Age: {{ age }}</li>
                <li>Bio: {{ bio }}</li>
            </ul>
        </div>
        <NuxtLink to="/">Logout <Icon name="mdi:logout-variant"/></NuxtLink>
    </div>
</template>

<script setup>
const name = ref('John Doe')
const age = ref(25)
const bio = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.')
</script>

<style scoped>

</style>