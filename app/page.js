import Home from "./components/home";
import { performRequest } from "./lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "./lib/fragments";

//todo
//!:1-header resposive menu
//!2-run links on the home page
//!3-Change team component on home page / datocms request team
//4-Add author name + Blogs  author page ex: serkan's blogs

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
