import { metaTagsFragment, responsiveImageFragment } from "@/app/lib/fragments";
import { FaHashtag } from "react-icons/fa";
import { toNextMetadata } from "react-datocms";
import { performRequest } from "@/app/lib/datocms";
import BlogCard from "@/app/components/blog-cards";


export async function generateStaticParams() {
    const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` });

    return allPosts.map(({ slug }) => slug);
}


const TAG_CONTENT_QUERY = `
    query TagQuery($slug: String) {
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
        category(filter: {slug: {eq: $slug}}) {
            seo: _seoMetaTags {
                ...metaTagsFragment
            }
            slug
            name
            _allReferencingPosts(orderBy: date_DESC) {
                title
                slug
                excerpt
                date
                coverImage {
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                    }
                }
                category {
                    id
                    name
                    slug
                }
                author {
                    name
                    picture {
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                        ...responsiveImageFragment
                    }
                    }
                }
            }
        }
    }
    ${metaTagsFragment}
    ${responsiveImageFragment}
`



function getPageRequest(slug) {

    return { query: TAG_CONTENT_QUERY, variables: { slug } };
}

// export async function generateMetadata({ params }) {
//     const { site, post } = await performRequest(getPageRequest(params.slug))


//     return toNextMetadata([...site.favicon, ...post.seo])
// }

export default async function Page({ params }) {


    const pageRequest = getPageRequest(params.slug);
    const data = await performRequest(pageRequest);

    return (
        <div className="mt-20 flex-col flex items-center justify-center">

            <div className="ml-4 text-3xl gap-2 inline-flex items-center font-bold leading-sm uppercase px-6 py-3 rounded-full bg-white text-gray-700 border">
                <FaHashtag />
                {params.slug}
            </div>
            {data.category ?
                <BlogCard data={data.category._allReferencingPosts} />
                : 
                <div>No blogs related to the tag were found.</div>
            }

        </div>
    )
}