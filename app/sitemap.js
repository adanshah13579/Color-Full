export default async function sitemap() {
  const baseUrl = "https://themeandcolor.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/tools`, lastModified: new Date() },
    { url: `${baseUrl}/tools/palette-generator`, lastModified: new Date() },
    { url: `${baseUrl}/tools/contrast-checker`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/blog/how-to-generate-color-palette-for-brand`, lastModified: new Date() },
    { url: `${baseUrl}/blog/best-color-palette-tools-for-designers`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/colors-for-ui-and-web-design`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/colors-for-branding-and-logos`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/colors-for-fashion-design`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/colors-for-automotive-design`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/colors-for-industrial-products`, lastModified: new Date() },
    { url: `${baseUrl}/palettes/black-and-gold`, lastModified: new Date() },
    { url: `${baseUrl}/palettes/luxury-automotive-color-palettes`, lastModified: new Date() },
  ];
}
