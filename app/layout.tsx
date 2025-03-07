import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/ui/header";
import { metaTagsFragment } from "@/lib/fragments";
import { performRequest } from "@/lib/datocms";

const GENERAL_CONTENT_QUERY = `
    query TagQuery{
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
          globalSeo {
            siteName
            facebookPageUrl
            titleSuffix
            twitterAccount
          }
        }
    }
    ${metaTagsFragment}
`

const { site } = await performRequest({ query: GENERAL_CONTENT_QUERY })
export const metadata = {
  title: site.globalSeo.siteName,
  icons: site.favicon.map((item: any) => ({
    rel: item.attributes.rel,
    type: item.attributes.type,
    sizes: item.attributes.sizes,
    url: item.attributes.href,
  })),
  description: "At The Octopus Labs, we combine the strength of expertises—Software Engineering, Blockchain Development, Smart Contract Integration, AI Solutions, Mobile App Creation, Legal Expertise, Project Management, and User Experience (UX) Design—with three hearts of passion, dedication, and vision.",
  metadataBase: new URL("https://theoctopuslabs.com"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  text-slate-900 tracking-tight min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-7N1HQTLCZ0" />
      </body>
    </html>
  );
}
