import { toNextMetadata } from "react-datocms/seo";
import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { BlogDetail } from "@/components/blog/BlogDetail";

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` });

  return allPosts.map(({ slug }: { slug: any }) => ({ slug }));
}

const PAGE_CONTENT_QUERY = `
  query PostBySlug($slug: String, $locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    post(filter: {slug: {eq: $slug}}, locale: $locale) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      tags {
        slug
        tag
      }
      content {
        value
        blocks {
          __typename
          ...on ImageBlockRecord {
            id
            image {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 675 }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 675 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 675 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        bio
        description
        slug
        picture {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
            ...responsiveImageFragment
          }
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}, locale:$locale) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 450 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        bio
        description
        slug
        picture {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
            ...responsiveImageFragment
          }
        }
      }
    }
  }

  ${responsiveImageFragment}
  ${metaTagsFragment}
`;

function getPageRequest(slug: string): { query: string, variables: { slug: string, locale: string } } {
  return { query: PAGE_CONTENT_QUERY, variables: { slug, locale: "en" } };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { site, post } = await performRequest(getPageRequest(slug));

  if (!post) {
    return {
      title: 'Content Not Found',
      description: 'The content you are looking for could not be found.'
    }
  }

  return {
    title: `${post.title} - The Octopus Labs`,
    description: post.excerpt || `${post.title} - The Octopus Labs blog post`,
    openGraph: {
      title: `${post.title} - The Octopus Labs`,
      description: post.excerpt || `${post.title} - The Octopus Labs blog post`,
      type: 'article',
      publishedTime: post.date,
      authors: post.author?.name ? [post.author.name] : [],
      images: post.ogImage?.url ? [post.ogImage.url] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `${post.title} - The Octopus Labs blog post`,
      images: post.ogImage?.url ? [post.ogImage.url] : [],
    },
    ...toNextMetadata([...site?.favicon, ...(post?.seo || [])])
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

const pageRequest = getPageRequest(slug);
const data = await performRequest(pageRequest);

return (
  <article className="">
    <BlogDetail data={data} />
  </article>
);
}
