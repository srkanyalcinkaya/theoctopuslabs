import Home from "@/components/home";
import { performRequest } from "@/lib/datocms";
import { responsiveImageFragment } from "@/lib/fragments";

const HOME_CONTENT_QUERY = `
query MyQuery($locale: SiteLocale) {
  allAuthors (locale: $locale) {
    id
    name
    bio
    description
    slug
    picture {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 1000, sat: -100}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
`
function getPageRequest() {
  return { query: HOME_CONTENT_QUERY, variables: { locale: "en" } };
}



export default async function Page() {

  const data = await performRequest(getPageRequest());

  return (
    <Home data={data} />
  );
}

