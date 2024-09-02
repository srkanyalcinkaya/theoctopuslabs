import { getDictionary } from "@/app/[lng]/getDictionary";
import Clients from "./clients";
import Contact from "./contact";
import Hero from "./hero";
import Team from "./team";
import Technologies from "./technologies";

export default async function Home({ data, lng }) {
    const intl = await getDictionary(lng)
   
    return (
        <main className="grow flex flex-col gap-8">
            <Hero intl={intl}/>
            <Clients intl={intl}/>
            <Technologies intl={intl}/>
            <Team authors={data.allAuthors} intl={intl} lng={lng}/>
            <Contact intl={intl} />
        </main>
    )
}