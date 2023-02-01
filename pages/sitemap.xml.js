import SETTINGS from "../core/settings";
import { getAllTagsPath, getAllPostsPath } from "./api/getPostData";

function generateSiteMap(paths) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SETTINGS.BLOG_URL}</loc>
     </url>
     ${paths
       .map((path) => {
         return `
       <url>
           <loc>${`${SETTINGS.BLOG_URL}${path}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const tags = await getAllTagsPath();
  const posts = await getAllPostsPath();

  const tagPaths = tags.map((tag) => `/tag/${tag.params.id}`);
  const postPaths = posts.map((post) => `/blog/${post.params.id}`);

  const sitemap = generateSiteMap([...tagPaths, ...postPaths]);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
