import "./globals.css";
import Container from "../components/container";
import Header from "../components/header";
import BackToTopButton from "../components/backtotop";
import { metaTagsFragment } from "../lib/fragments";
import { performRequest } from "../lib/datocms";
import Footer from "../components/footer";
import getAvailableLocales, { getFallbackLocale } from "../i18n/settings";
import { getDictionary } from "./getDictionary";
import { GoogleAnalytics } from '@next/third-parties/google'


export async function generateStaticParams() {
  const languages = await getAvailableLocales()
  return languages.map(lng => {
    lng
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
  description: "At The Octopus Labs, we combine the strength of expertises—Software Engineering, Blockchain Development, Smart Contract Integration, AI Solutions, Mobile App Creation, Legal Expertise, Project Management, and User Experience (UX) Design—with three hearts of passion, dedication, and vision.",
  metadataBase: new URL("https://theoctopuslabs.com")
}



export default async function RootLayout({ children, params }) {
  const { lng } = params;
  const intl = await getDictionary(lng);

  return (
    <html>
      <body className="antialiased bg-white text-slate-900 tracking-tight font-rubik  min-h-screen">
        <Header lng={lng} intl={intl} />
        <Container>
          {children}
        </Container>
        <BackToTopButton />
        <Footer lng={lng} intl={intl} />
        <GoogleAnalytics gaId="G-7N1HQTLCZ0" />
      </body>
    </html>
  );
}
