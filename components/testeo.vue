<script lang="ts">
import { ref } from 'vue';
</script>
<template>
	<div>
		<h1>Welcome to the homepage</h1>
		<p>{{ data.name }}</p>
		{{ message }}
		<br>
		cangrejo
	</div>
</template>
<script setup lang="ts">
//add data
const data = reactive({
	name: 'John Doe',
	message: 'Hello World'
})
const message = ref('CAFE CON PATO')
//mount data
onMounted(() => {
	console.log(data.name)
	data.name = 'Jane Doe'
	//for 10 numbers
	for (let i = 0; i < 10; i++) {
		console.log(i)
	}
})
</script>
