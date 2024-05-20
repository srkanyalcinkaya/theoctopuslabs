import Home from "@/app/components/home";
import getAvailableLocales from "@/app/i18n/settings";
import { performRequest } from "@/app/lib/datocms";
import { responsiveImageFragment } from "@/app/lib/fragments";


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
export async function generateStaticParams() {
  const languages = await getAvailableLocales();
  return languages.map((language) => {
    language;
  });
}

function getPageRequest() {

  return {
    query: HOME_CONTENT_QUERY
  };
}
export default async function Page({ params }) {
  const { lng } = params
  // const pageRequest = getPageRequest();

  const data = await performRequest(
    {
      query: HOME_CONTENT_QUERY, 
      locale: lng,
    }
  );
  return (
    <Home data={data} lng={lng} />
  );
}
