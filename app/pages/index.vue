<script setup lang="ts">
const currentYear = new Date().getFullYear();

useSeoMeta({
	title: "Thao Nguyen Van",
	description:
		"I build web apps with Laravel and Vue. This is where I write down what I learn — patterns that work, mistakes worth avoiding, things I wish I'd found earlier.",
	ogTitle: "Thao Nguyen Van",
	ogDescription:
		"I build web apps with Laravel and Vue. This is where I write down what I learn — patterns that work, mistakes worth avoiding, things I wish I'd found earlier.",
	twitterCard: "summary_large_image",
});

defineOgImage("OgImageBlog", {
	title: "thaolaptrinh.com",
	description: "Laravel & Vue — things I learn along the way.",
});

const { data: articles } = await useAsyncData("home:articles", async () => {
	return queryCollection("articles")
		.where("status", "=", "published")
		.order("date", "DESC")
		.select("title", "path", "description", "date", "category", "tags")
		.all();
});
</script>

<template>
  <div class="min-h-screen text-[#e5e5e5]">
    <header class="py-8">
      <nav class="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <span class="inline-block overflow-hidden whitespace-nowrap border-r border-neutral-400 text-sm text-neutral-400 font-mono animate-[typing-loop_5s_infinite,blink-caret_0.75s_step-end_infinite]">thaolaptrinh.com</span>
        <a href="https://github.com/thaolaptrinh" target="_blank" rel="noopener"
          class="text-sm text-neutral-400 hover:text-neutral-300 transition-colors">
          github
        </a>
      </nav>
    </header>

    <main class="max-w-2xl mx-auto px-6 py-16">
      <section class="mb-20">
        <h1 class="text-2xl text-[#e5e5e5] font-medium mb-5">
          Hey, I'm Thao — from Vietnam.
        </h1>
        <div class="space-y-3">
          <p class="text-neutral-400 text-base leading-relaxed">
            I build web apps with <span class="text-[#e5e5e5]">Laravel</span> and <span class="text-[#e5e5e5]">Vue</span>.
          </p>
          <p class="text-neutral-400 text-base leading-relaxed">
            This is where I write down what I learn — patterns that work, mistakes worth avoiding, things I wish I'd found earlier.
          </p>
        </div>
      </section>

      <section>
        <div class="space-y-12">
          <article v-for="article in articles" :key="article.path" class="group">
            <NuxtLink :to="article.path" class="block">
              <div class="flex items-center gap-3 mb-2">
                <time
                  v-if="article.date"
                  :datetime="new Date(article.date).toISOString()"
                  class="text-xs text-neutral-400 font-mono"
                >
                  {{
                    new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                  }}
                </time>
                <span v-if="article.category" class="text-xs text-neutral-400 font-mono">
                  {{ article.category }}
                </span>
              </div>
              <h2 class="text-[#e5e5e5] text-lg leading-snug group-hover:text-neutral-400 transition-colors">
                {{ article.title }}
              </h2>
              <p v-if="article.description" class="text-neutral-400 text-sm mt-2 line-clamp-2">
                {{ article.description }}
              </p>
            </NuxtLink>
          </article>
        </div>

        <div v-if="!articles?.length" class="text-neutral-400 text-sm">
          No articles yet.
        </div>
      </section>
    </main>

    <footer class="py-12">
      <div class="max-w-2xl mx-auto px-6">
        <p class="text-xs text-neutral-400">
          © {{ currentYear }} Thao Nguyen Van
        </p>
      </div>
    </footer>
  </div>
</template>
