import React from "react"
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import matter from 'gray-matter';

const config = {
    logo: (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
                />
            </svg>
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                Learn With Octopus
            </span>
        </>
    ),
    project: {
        link: "https://github.com/srkanyalcinkaya/theoctopuslabs"
    },
    // chat: {
    //     link: "https://discord.com"
    // },
    docsRepositoryBase: "https://github.com/srkanyalcinkaya",
    footer: {
        text: (
            <div className="flex w-full flex-col items-center sm:items-start">

                <p className="mt-6 text-xs">
                    © {new Date().getFullYear()} The Octopus Labs.
                </p>
            </div>
        )
    }
    ,
    feedback: {
        content: null
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s | The Octopus Labs'
            }
        }
    },
    toc: {
        backToTop: true
    },
    head: () => {
        const { asPath, defaultLocale, locale, route } = useRouter()
        const { frontMatter } = useConfig()
        const socialCard =
            route === '/' || frontMatter.title
                ? 'https://www.theoctopuslabs.com/og.png'
                : `https://www.theoctopuslabs.com/og?title=${frontMatter.title}`
        const url =
            'https://www.theoctopuslabs.com' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
        return (
            <>
                <meta name="keywords" content={`${frontMatter.tags ? frontMatter.tags.slice(",") : "The Octopus Labs"}`} />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'The Octopus Labs'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'The Octopus Labs'}
                />
                <meta name="og:image" content={socialCard} />
                <meta property="og:site_name" content="The Octopus Labs " />
                <meta property="og:locale" content="tr" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@theoctopuslabs" />
                <meta name="twitter:title" content={frontMatter.title || 'The Octopus Labs'} />
                <meta name="twitter:description" content={frontMatter.description || 'The Octopus Labs'} />
                <meta name="twitter:image" content={socialCard} />
                <meta name="twitter:image:width" content="1024" />
                <meta name="twitter:image:height" content="1024" />
            </>
        )
    }
}


export default config
