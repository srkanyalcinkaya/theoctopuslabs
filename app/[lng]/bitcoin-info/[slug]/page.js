"use client"

import { artAndCultureResources, bitcoin_content, blockExplorers, blogs, books, buying_earning, careers, charity, data_anchor, developer_tools, discussionForums, documentaries, economicsResources, exchange_data, feeEstimates, forks, governance, history, investmentTheses, legal, merchant_adoption, mining, news, nodeData, onlineClasses, other_layers, other_resources, podcast, presentationCollections, privacyResources, securityResources, statisticsMetrics, tax_accounting, technical_resources, trading, visualizations, walletData, x } from "@/app/utils";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const pathname = usePathname();
    const pathSlipt = pathname.split("/")
    let data;
    switch (pathSlipt[pathSlipt.length - 1]) {
        case "getting-started":
            data = bitcoin_content
            break;
        case "recommended-wallets":
            data = walletData
            break;
        case "full-node":
            data = nodeData
            break;
        case "history":
            data = history
            break;
        case "news":
            data = news;
            break;
        case "discussion-forums":
            data = discussionForums;
            break;
        case "statistics-metrics":
            data = statisticsMetrics;
            break;
        case "fee-estimates":
            data = feeEstimates;
            break;
        case "block-explorers":
            data = blockExplorers;
            break;
        case "visualizations":
            data = visualizations;
            break;
        case "mining":
            data = mining;
            break;
        case "data-anchor":
            data = data_anchor;
            break;
        case "technical-resources":
            data = technical_resources;
            break;
        case "developer-tools":
            data = developer_tools;
            break;
        case "security":
            data = securityResources;
            break;
        case "privacy":
            data = privacyResources;
            break;
        case "economics":
            data = economicsResources;
            break;
        case "art-music":
            data = artAndCultureResources;
            break;
        case "online-offline-classes":
            data = onlineClasses;
            break;
        case "documentaries":
            data = documentaries;
            break;
        case "video-presentations":
            data = presentationCollections;
            break;
        case "podcasts":
            data = podcast;
            break;
        case "blogs":
            data = blogs;
            break;
        case "books":
            data = books;
            break;
        case "x":
            data = x;
            break;
        case "investment-theses":
            data = investmentTheses;
            break;
        case "buying-earning":
            data = buying_earning;
            break;
        case "trading":
            data = trading;
            break;
        case "exchange-data":
            data = exchange_data;
            break;
        case "merchant-adoption":
            data = merchant_adoption;
            break;
        case "tax-accounting":
            data = tax_accounting;
            break;
        case "careers":
            data = careers;
            break;
        case "charity":
            data = charity;
            break;
        case "legal":
            data = legal;
            break;
        case "governance":
            data = governance;
            break;
        case "forks":
            data = forks;
            break;
        case "other-layers":
            data = other_layers;
            break;
        case "other-resources":
            data = other_resources;
            break;
        default:
            data = bitcoin_content
            break;
    }

    return (
        <div className="mt-20 flex-col flex items-center justify-center">

            <div className="flex flex-col items-start text-left gap-4 mb-8">
                <h1 className="text-3xl text-black font-bold ">Bitcoin Resources</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8 place-content-center">
                {data.map((section) => (
                    <div key={section.id} className="mt-10  h-auto">
                        <h2 id={section.id} className="text-2xl font-bold text-primary mb-4 text-wrap text-start flex items-start px-4">
                            <a href={`#${section.id}`}>{section.title}</a>
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {section?.links ? section?.links?.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        title={link.title}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-primary/70 hover:underline flex items-center gap-2 text-wrap"
                                    >
                                        <span>
                                            {link.text}
                                        </span>
                                        {link.href.startsWith('http') ? <BsBoxArrowUpRight size={14} /> : null}
                                    </Link>
                                </li>
                            )) :
                                section?.items?.map((item, index) => (
                                    <li key={index}>
                                        <div
                                            className="text-black/70 flex items-center gap-2  md:pr-10"
                                        >
                                            <span>
                                                {item}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}