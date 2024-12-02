// @ts-check
import { defineConfig } from "astro/config"

export default defineConfig({
	security: {
		checkOrigin: true,
	},
})
