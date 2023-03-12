<script lang="ts">
import { Testeo } from "./.nuxt/components";
import Button from "primevue/button"
</script>
<template>
	<div>
		<Testeo></Testeo>
		<Testeo></Testeo>
		<Button label="jamon" size="small"></Button>

		<Card>
			<template #title> Simple Card </template>
			<template #content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
				numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
				esse, cupiditate neque
				quas!
			</template>
		</Card>
	</div>
</template>
