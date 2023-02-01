import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import a from "remark-autolink-headings";
import b from "remark-slug";
import c from "remark-code-titles";

// current 'posts' directory
const postsDirectory = path.join(process.cwd(), "posts");
const mdx_file_extention = ".mdx";

function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return path.parse(fileName);
  });
}

function getMdxFiles() {
  const allFiles = getAllFilesInDirectory();
  return allFiles.filter((parsedFile) => parsedFile.ext == mdx_file_extention);
}

export function getAllPostsPath() {
  const allMdxFiles = getMdxFiles();
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name,
      },
    };
  });
}

export async function getAllTagsPath() {
  const allPosts = await getPostsMetaData();
  const allTags = allPosts.flatMap((post) => post.keywords);
  const tagsWithoutDuplicated = [...new Set(allTags)];

  return tagsWithoutDuplicated.map((tag) => {
    return {
      params: {
        id: tag,
      },
    };
  });
}

export async function getPostsMetaData() {
  const allMdxFiles = getMdxFiles();

  const postsMetaData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(postsDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata["id"] = parsedFile.name;
    return metadata;
  });

  return postsMetaData;
}

export async function getPostsMetaDataByTag(tag) {
  const allPosts = await getPostsMetaData();

  const tagPosts = allPosts.filter((post) => {
    return post.keywords.includes(decodeURIComponent(tag));
  });

  return tagPosts;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, id + mdx_file_extention);

  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata["id"] = id;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [a, b, c],
      rehypePlugins: [mdxPrism],
    },
  });

  return { metadata: metadata, mdxSource };
}
