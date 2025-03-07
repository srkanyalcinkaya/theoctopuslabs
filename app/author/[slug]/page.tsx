import BlogCard from "@/components/blog/BlogCard";
import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { toNextMetadata } from "react-datocms";
import AuthorProfile from "@/components/author/AuthorProfile";

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

function getPageRequest(slug: string) {
    return { query: AUTHOR_CONTENT_QUERY, variables: { slug } };
}

export async function generateMetadata({ params }: { params: any }) {
    const { site, author } = await performRequest(getPageRequest(params.slug))
    if (!author) {
        return {
            title: 'Author Not Found',
            description: 'The author you are looking for could not be found.'
        }
    }
    
    return {
        title: `${author.name} - The Octopus Labs`,
        description: author.bio || author.description || `${author.name} - The Octopus Labs author`,
        openGraph: {
            title: `${author.name} - The Octopus Labs`,
            description: author.bio || author.description || `${author.name} - The Octopus Labs author`,
            type: 'profile',
            images: author.picture?.responsiveImage?.src ? [author.picture.responsiveImage.src] : [],
        },
        ...toNextMetadata([...site?.favicon, ...(author?.seo || [])])
    }
}

export default async function Page({ params }: { params: any }) {
    const pageRequest = getPageRequest(params.slug);
    const data = await performRequest(pageRequest);
    
    if (!data.author) {
        return <div className="mt-20 text-center">Author not found.</div>;
    }

    const { name, bio, picture, description, _allReferencingPosts } = data.author;
    
    return (
        <AuthorProfile 
            name={name}
            bio={bio}
            picture={picture}
            description={description}
            posts={_allReferencingPosts || []}
        />
    );
}