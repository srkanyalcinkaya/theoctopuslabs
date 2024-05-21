import Home from "@/app/components/home";
import getAvailableLocales from "@/app/i18n/settings";
import { performRequest } from "@/app/lib/datocms";
import { responsiveImageFragment } from "@/app/lib/fragments";

export async function generateStaticParams() {
  const languages = await getAvailableLocales();
  return languages.map((language) => {
    language;
  });
}

const HOME_CONTENT_QUERY = `
query MyQuery($locale: SiteLocale) {
  allAuthors (locale: $locale) {
    id
    name
    bio
    description
    slug
    picture {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
`
function getPageRequest(lng) {
  return { query: HOME_CONTENT_QUERY, variables: { locale: lng } };
}



export default async function Page({ params }) {
  const { lng } = params

  const data = await performRequest(getPageRequest(lng));

 
  return (
    <Home data={data} lng={lng} />
  );
}

