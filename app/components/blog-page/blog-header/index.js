import Link from "next/link";
import Avatar from "../../avatar";
import CoverImage from "../../cover-image";
import Date from "../../date";
import BlogTitle from "../blog-title";
import { FaHashtag } from "react-icons/fa";

export default function BlogHeader({ title, coverImage, date, author, tags }) {


    return (
        <>
            <BlogTitle>{title}</BlogTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture} bio={author.bio} slug={author.slug} />
            </div>
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                <CoverImage
                    title={title}
                    responsiveImage={coverImage.responsiveImage}
                />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} bio={author.bio} slug={author.slug} />
                </div>
                <div className="mb-6 text-lg flex items-center gap-6 w-full justify-between">
                    <Date dateString={date} />
                    <div className="flex items-center gap-1">
                        {tags.map((item) => (
                            <Link href={`/tag/${item?.slug}`}
                                class=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                            >
                                <FaHashtag />
                                {item?.tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}