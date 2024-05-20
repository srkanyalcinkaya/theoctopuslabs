import BlogCard from "@/app/components/blog-cards";
import { performRequest } from "@/app/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/app/lib/fragments";
import { toNextMetadata } from "react-datocms/seo";


const PAGE_CONTENT_QUERY = `
  {
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
    allPosts(orderBy: date_DESC, first: 20) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
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
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata() {
  const { site, blog } = await performRequest(getPageRequest());
  return toNextMetadata([...site?.favicon, ...blog?.seo]);
}

export default async function Page({params}) {
  const {lng} = params
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  return (
    <BlogCard data={data?.allPosts} lng={lng} />
  )
}