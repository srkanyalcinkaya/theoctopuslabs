import Home from "./components/home";
import { performRequest } from "./lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "./lib/fragments";


const HOME_CONTENT_QUERY = `
query MyQuery {
  allAuthors {
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
function getPageRequest() {

  return { query: HOME_CONTENT_QUERY };
}

export default async function Page() {

  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  return (
    <Home data={data} />
  );
}
