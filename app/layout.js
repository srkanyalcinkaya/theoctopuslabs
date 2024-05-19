import "./globals.css";
import Container from "./components/container";
import Header from "./components/header";
import BackToTopButton from "./components/backtotop";
import { metaTagsFragment } from "./lib/fragments";
import { toNextMetadata } from "react-datocms/seo";
import { performRequest } from "./lib/datocms";
import Footer from "./components/footer";
import getAvailableLocales from "./i18n/settings";



export async function generateStaticParams() {
  const languages = await getAvailableLocales()
  return languages.map(language => {
    language
  })
}

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
  icons: site.favicon.map((item) => ({
    rel: item.attributes.rel,
    type: item.attributes.type,
    sizes: item.attributes.sizes,
    url: item.attributes.href,
  })),
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900 tracking-tight font-rubik  min-h-screen">
        <Header />
        <Container>
          {children}
        </Container>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
