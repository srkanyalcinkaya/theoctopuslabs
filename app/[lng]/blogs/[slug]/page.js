import { BlogPage } from "@/app/components/blog-page";
import { toNextMetadata } from "react-datocms";
import { performRequest } from "@/app/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/app/lib/fragments";

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` });

  return allPosts.map(({ slug }) => slug);
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
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
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
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
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



function getPageRequest(slug, lng) {

  return { query: PAGE_CONTENT_QUERY, variables: { slug, locale: lng } };
}

export async function generateMetadata({ params }) {
  const { lng, slug } = params;
  const { site, post } = await performRequest(getPageRequest(slug, lng))

  return toNextMetadata([...site?.favicon, ...post?.seo])
}
export default async function Page({ params }) {
  const { lng, slug } = params

  const pageRequest = getPageRequest(slug, lng);
  const data = await performRequest(pageRequest);
  
  return (
    <BlogPage data={data} lng={lng} />
  )
}