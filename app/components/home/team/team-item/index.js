import { Image } from "react-datocms/image";


export default function TeamItem({ item }) {
    return (
        <>
            <div className="border border-black flex flex-col items-start justify-start gap-4 rounded-lg p-5 text-start">
                <div className="flex items-center gap-4">
                    <Image
                        alt={item.name}
                        data={item.picture.responsiveImage}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col items-start">
                        <h3 className='text-slate-900 text-lg md:text-xl font-bold  '>{item.name} </h3>
                        <p className='text-slate-700  text-xs font-normal  '>{item.bio}</p>
                    </div>
                </div>
                <p className='text-slate-700  text-xs font-normal  '>{item.description} </p>
            </div>
        </>
    )
}