import BlogPage from "@/components/blog/BlogPage";
import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { toNextMetadata } from "react-datocms/seo";

const PAGE_CONTENT_QUERY = `
query MyQuery($locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allPosts(orderBy: date_DESC, first: 20, locale: $locale) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1600, h: 900, crop: entropy }) {
          ...responsiveImageFragment
        }
      }
      tags {
        slug
        tag
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

  ${metaTagsFragment}
  ${responsiveImageFragment}
`;


function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY, variables: { locale: "en" } };
}

export async function generateMetadata() {
  const { site, blog } = await performRequest(getPageRequest());
  
  return {
    title: 'Blog - The Octopus Labs',
    description: 'Latest content about software, technology and digital transformation',
    openGraph: {
      title: 'Blog - The Octopus Labs',
      description: 'Latest content about software, technology and digital transformation',
      type: 'website',
    },
    ...toNextMetadata([...site?.favicon, ...(blog?.seo || [])])
  };
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  
  return (
    <BlogPage posts={data?.allPosts} />
  );
}