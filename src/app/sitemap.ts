import uuids from '@/constants/uuids';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.apps.hemanthbabu648.com';

  const allProjectEntries = Object.entries(uuids);

  const slicedProjectEntries = allProjectEntries.slice(0, 4);

  // Create sitemap entries for projects
  const projectSitemapEntries = slicedProjectEntries.map(([_, uuid]) => ({
    url: `${baseUrl}/projects/${uuid}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...routes, ...projectSitemapEntries];
}
