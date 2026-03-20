<script setup lang="ts">
const currentYear = new Date().getFullYear();
const route = useRoute();
const { data: article } = await useAsyncData(route.path, () =>
	queryCollection("articles").path(route.path).first(),
);

if (!article.value) {
	throw createError({ statusCode: 404, statusMessage: "Article not found" });
}

const articleDate = new Date(article.value.date);

useSeoMeta({
	title: () =>
		article.value?.title
			? `${article.value.title} - thaolaptrinh.com`
			: "Article",
	description: () => article.value?.description ?? "Blog article",
	ogTitle: () => article.value?.title,
	ogDescription: () => article.value?.description,
	twitterCard: "summary_large_image",
});

defineOgImage("OgImageBlog", {
	title: article.value?.title ?? "thaolaptrinh.com",
	description:
		article.value?.description ??
		"Laravel & Vue — things I learn along the way.",
});

useHead({
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: article.value.title,
				description: article.value.description,
				datePublished: articleDate.toISOString(),
				...(article.value.lastModified && {
					dateModified: new Date(article.value.lastModified).toISOString(),
				}),
				author: {
					"@type": "Person",
					name: article.value.author?.name ?? "Thao Nguyen Van",
					url: "https://thaolaptrinh.com",
				},
				publisher: {
					"@type": "Person",
					name: "Thao Nguyen Van",
					url: "https://thaolaptrinh.com",
				},
				url: `https://thaolaptrinh.com${route.path}`,
				...(article.value.tags?.length && {
					keywords: article.value.tags.join(", "),
				}),
			}),
		},
	],
});
</script>

<template>
  <div class="min-h-screen text-[#e5e5e5]">
    <header class="py-6">
      <nav class="max-w-2xl mx-auto px-6">
        <NuxtLink to="/" class="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-[#e5e5e5] transition-colors">
          <UIcon name="i-lucide-arrow-left" class="size-3.5" />
          Back
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-2xl mx-auto px-6 py-12">
      <article>
        <header class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <time
              :datetime="articleDate.toISOString()"
              class="text-xs text-neutral-500 font-mono"
            >
              {{ articleDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </time>
            <span v-if="article.category" class="text-xs text-neutral-600 font-mono">
              {{ article.category }}
            </span>
          </div>
          <h1 class="text-2xl text-[#e5e5e5] mb-4 font-medium leading-tight">{{ article.title }}</h1>
          <div v-if="article.tags?.length" class="flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="text-xs text-neutral-600 font-mono border border-neutral-800 px-2 py-0.5 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <div class="prose prose-invert max-w-none">
          <ContentRenderer :value="article" />
        </div>
      </article>
    </main>

    <footer class="py-8">
      <div class="max-w-2xl mx-auto px-6 text-xs text-neutral-600">
        © {{ currentYear }} Thao Nguyen Van
      </div>
    </footer>
  </div>
</template>
