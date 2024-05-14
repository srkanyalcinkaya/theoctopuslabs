import Clients from "./clients";
import Hero from "./hero";
import Technologies from "./technologies";

export default function Home () {
    return(
        <main className="grow">
            <Hero/>
            <Clients/>
            <Technologies/>
        </main>
    )
}