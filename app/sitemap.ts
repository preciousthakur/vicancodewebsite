import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vicancode.com';

  const routes = [
    '',
    '/products',
    '/pricing',
    '/services',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/products' || route === '/pricing' ? 0.9 : 0.8,
  }));
}
