import RSS from "rss";

const DEFAULT_LIMIT = 5;

export default defineEventHandler(async (event) => {
	const siteUrl = `${getRequestProtocol(event)}://${getRequestHost(event)}`;
	const query = getQuery(event);
	const limit = Math.max(1, Number(query.limit) || DEFAULT_LIMIT);

	const articles = await queryCollection(event, "articles")
		.where("status", "=", "published")
		.order("date", "DESC")
		.select("title", "path", "description", "date")
		.limit(limit)
		.all();

	const feed = new RSS({
		title: "Thao Nguyen Van",
		description: "Articles about PHP, Laravel, and web development.",
		site_url: siteUrl,
		feed_url: `${siteUrl}/feed.xml`,
		language: "vi",
		ttl: 60,
	});

	for (const article of articles) {
		feed.item({
			title: article.title,
			url: `${siteUrl}${article.path}`,
			date: article.date,
			description: article.description ?? "",
		});
	}

	setResponseHeader(event, "Content-Type", "application/xml; charset=utf-8");
	return feed.xml({ indent: true });
});
