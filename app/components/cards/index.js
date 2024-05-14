export default function Cards({item}) {
    return (
        <div className="hover:translate-y-[-8px] transition ease-in-out delay-150 md:max-w-xs w-full   bg-no-repeat bg-cover p-5 border-[1px] border-slate-300 rounded-lg text-center flex flex-col items-center gap-2  ">
            <img src={item.img} alt={item.title} className='h-12 w-auto' />
            <h3 className='text-slate-900 text-xl md:text-2xl font-bold  '>{item.title}</h3>
            <p className='text-slate-700  text-xs font-normal  '>{item.description}</p>
        </div>
    )
}