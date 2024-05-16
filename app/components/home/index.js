import Clients from "./clients";
import Contact from "./contact";
import Hero from "./hero";
import Team from "./team";
import Technologies from "./technologies";

export default function Home ({data}) {
    return(
        <main className="grow flex flex-col gap-8">
            <Hero/>
            <Clients/>
            <Technologies/>
            <Team authors={data.allAuthors}/>
            <Contact/>
        </main>
    )
}