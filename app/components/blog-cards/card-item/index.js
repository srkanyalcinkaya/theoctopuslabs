import Link from "next/link";

export default function CardItem({ blog, lng }) {
    return (
        <li>
            <Link href={`/${lng}/blogs/${blog.slug}`} className="relative flex flex-col sm:flex-row xl:flex-col items-start group">
                <div className="order-1 sm:ml-6 xl:ml-0">
                    <div className="mb-1 text-sm leading-6 text-indigo-500 flex gap-2 items-center">
                        {blog.tags.map((item, index) => (
                            <span key={index}>
                                #{item?.tag}
                            </span>
                        ))}
                        {blog.tags.length == 0 && <span>#Tag</span>}
                    </div>
                    <h3 className="mb-1 text-slate-900 font-semibold">
                        {blog.title}
                    </h3>
                    <div className="prose prose-slate prose-sm text-slate-600">
                        <p>{blog.excerpt}</p>
                    </div>
                    <div className="group group-hover:ml-2 transition-all delay-75 ease-in-out inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6">
                        Read more
                        <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width={3} height={6} viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0L3 3L0 6" />
                        </svg>
                    </div>
                </div>
                <div className="w-full sm:w-[17rem] xl:w-full h-48 sm:h-40 xl:h-56 overflow-hidden rounded-lg mb-4 ">
                    <img 
                        src={blog.coverImage.responsiveImage.srcSet} 
                        alt={blog.title} 
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
            </Link>
        </li>
    )
}