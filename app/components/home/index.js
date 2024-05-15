import Clients from "./clients";
import Contact from "./contact";
import Hero from "./hero";
import Team from "./team";
import Technologies from "./technologies";

export default function Home () {
    return(
        <main className="grow">
            <Hero/>
            <Clients/>
            <Technologies/>
            <Team/>
            <Contact/>
        </main>
    )
}