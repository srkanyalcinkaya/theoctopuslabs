export default function Hero() {
    return (
        <section className='w-full   px-2 md:px-4'>

            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='pt-32 flex flex-col gap-4 items-start justify-start  max-w-3xl w-full'>
                    <h1 className='font-syne font-bold text-3xl md:text-6xl text-black '>We bring your ideas to life in a stunning way.</h1>
                    <p className='text-secondary text-sm md:text-lg  font-normal pt-4 tracking-[0.99px] '>We are here to help you make your vision a reality.</p>
                </div>
                <div>
                    <img src="/images/hand.png" alt="Robot" className="   "/>
                </div>
            </div>
        </section>
    )
}