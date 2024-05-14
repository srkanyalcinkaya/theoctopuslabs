import SectionSeparator from "../section-separator";
import BlogBody from "./blog-body";
import BlogHeader from "./blog-header";
import MoreStories from "./more-stories";

export function BlogPage({ data }) {
  const { post, morePosts } = data;

  return (
    <>
      <article>
        <BlogHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <BlogBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}