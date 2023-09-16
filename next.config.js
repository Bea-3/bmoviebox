/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com", "image.tmdb.org"], //Domain of image host
  },
};

module.exports = nextConfig;
