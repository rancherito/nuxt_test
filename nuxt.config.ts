// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = '/';
export default defineNuxtConfig({
	css: [
		//core
		"primevue/resources/primevue.min.css",
		//icons
		"primeicons/primeicons.css"
	],
	build: {
		transpile: ["primevue"]
	},
	app: {
		baseURL: baseUrl,
		head: {
			link: [
				{
					id: 'theme-link',
					rel: 'stylesheet',
					href: baseUrl + 'theme.css'
				}
			]
		}
	}

})
