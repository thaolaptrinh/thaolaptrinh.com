// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxt/content",
		"nuxt-studio",
		"nuxt-og-image",
		"@nuxtjs/sitemap",
		"@vercel/analytics",
	],

	css: ["~/assets/css/main.css"],

	content: {
		build: {
			markdown: {
				highlight: {
					theme: "github-dark",
					langs: [
						"php",
						"js",
						"ts",
						"vue",
						"html",
						"css",
						"json",
						"bash",
						"diff",
					],
				},
			},
		},
	},

	app: {
		head: {
			htmlAttrs: { lang: "en" },
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
		},
	},

	colorMode: {
		preference: "dark",
		fallback: "dark",
		classSuffix: "",
	},

	site: {
		url: "https://thaolaptrinh.com",
		name: "Thao Nguyen Van",
	},

	sitemap: {
		sources: ["/api/__sitemap__/urls"],
	},

	routeRules: {
		"/": { prerender: true },
		"/articles/**": { prerender: true },
	},

	studio: {
		dev: process.env.NODE_ENV === "development",
		route: "/_studio",
		repository: {
			provider: "github",
			owner: "thaolaptrinh",
			repo: "thaolaptrinh.com",
			branch: "main",
		},
	},
});
