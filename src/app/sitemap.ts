// import uuids from '@/constants/uuids';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.apps.hemanthbabu648.com';

  // TODO: Uncomment and implement the logic to fetch uuids if needed
  // Create sitemap entries for projects
  // const allProjects = uuids.map(news => ({
  //   url: `${baseUrl}/news/${news.slug}`,
  //   lastModified: news.date ? new Date(news.date) : new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...routes];
}
