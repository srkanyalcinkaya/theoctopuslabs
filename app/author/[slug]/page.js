import { toNextMetadata } from "react-datocms";
import BlogCard from "@/app/components/blog-cards";
import { performRequest } from "@/app/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/app/lib/fragments";


const AUTHOR_CONTENT_QUERY = `
    query TagQuery($slug: String) {
        site: _site {
            favicon: faviconMetaTags {
              ...metaTagsFragment
            }
          }
        
        author(filter: {slug: {eq: $slug}}) {
            seo: _seoMetaTags {
                ...metaTagsFragment
            }
            name
            bio
            description
            slug
            picture {
                responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                    ...responsiveImageFragment
                }
            }
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
                tags {
                    tag
                    slug
                }
                author {
                    name,
                    bio,
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
    }
    ${metaTagsFragment}
    ${responsiveImageFragment}
`



function getPageRequest(slug) {

    return { query: AUTHOR_CONTENT_QUERY, variables: { slug } };
}
export async function generateMetadata({ params }) {
    const { site, author } = await performRequest(getPageRequest(params.slug))

    return toNextMetadata([...site?.favicon, ...author?.seo])
}
export default async function Page({ params }) {

    const pageRequest = getPageRequest(params.slug);
    const data = await performRequest(pageRequest);
    const { name, bio, picture, description } = data?.author;
   
    return (


        <div className="mt-20 flex-col flex items-center justify-center">

            <div className=" max-w-2xl w-full gap-4 flex flex-col items-start   px-6 py-3 rounded-full bg-white text-gray-700  ">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img
                            alt={name}
                            src={picture.responsiveImage.src}
                            className="rounded-sm w-auto h-24"
                        />
                    </div>
                    <div className="text-xl font-bold flex flex-col items-start text-start">
                        {name}
                        <span className="font-light text-base ">
                            {bio}
                        </span>
                    </div>
                </div>
                <div className="text-base">
                    {description}
                </div>
            </div>
            {data.author ?
                <BlogCard data={data.author._allReferencingPosts} />
                :
                <div>No blogs related to the tag were found.</div>
            }
        </div>
    )
}