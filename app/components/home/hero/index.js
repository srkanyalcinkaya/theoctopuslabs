export default function Hero() {
    return (
        <section className='w-full   px-2 md:px-4'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='pt-32 flex flex-col gap-4 items-start justify-start  max-w-3xl w-full'>
                    <h1 className='font-syne font-bold text-3xl md:text-6xl text-black '>Everything is Within Our Reach</h1>
                    <p className='text-secondary text-sm md:text-lg  font-normal pt-4 '>At The Octopus Labs, we combine the strength of expertises—Software Engineering, Blockchain Development, Smart Contract Integration, AI Solutions, Mobile App Creation, Legal Expertise, Project Management, and User Experience (UX) Design—with three hearts of passion, dedication, and vision.</p>
                </div>
                <div>
                    <img src="/images/hand.png" alt="Robot"/>
                </div>
            </div>
        </section>
    )
}