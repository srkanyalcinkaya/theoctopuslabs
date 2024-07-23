import { bitcoin_content } from "@/app/utils";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Page() {
    return (
        <div className="mt-20 flex-col flex items-center justify-center">

            <div className="flex flex-col items-start text-left gap-4 mb-8">
                <h1 className="text-3xl text-black font-bold ">Getting Started with Bitcoin</h1>
                <p className="text-sm text-gray-500">Bitcoin is a revolutionary system that is quite complex and has a steep learning curve. Make sure you have a decent grasp of the system before you store a significant amount of value in it. <br /> <b>If you make a critical mistake such as losing your keys or sending your money to a scammer, no one can fix it!</b></p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8 place-content-center">
                {bitcoin_content.map((section) => (
                    <div key={section.id} className="mt-10">
                        <h2 id={section.id} className="text-2xl font-bold text-primary mb-4">
                            <a href={`#${section.id}`}>{section.title}</a>
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        title={link.title}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-primary/70 hover:underline flex items-center gap-2"
                                    >
                                        <span>
                                            {link.text}
                                        </span>
                                        {link.href.startsWith('http') ? <BsBoxArrowUpRight size={14}/> : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}