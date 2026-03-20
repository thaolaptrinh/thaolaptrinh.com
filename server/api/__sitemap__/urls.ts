export default defineEventHandler(async (event) => {
	const articles = await queryCollection(event, "articles")
		.where("status", "=", "published")
		.select("path", "date", "lastModified")
		.all();

	return articles.map((article) => ({
		loc: article.path,
		lastmod: article.lastModified ?? article.date,
		changefreq: "monthly",
		priority: 0.8,
	}));
});
