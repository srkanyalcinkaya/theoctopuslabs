import Image from "next/image";

export default function TeamItem({ img, name, description }) {

    return (
        <>
            <div className="border border-black flex flex-col items-start justify-start gap-4 rounded-lg p-5 text-start">
                <div className="flex items-center gap-4">

                    <Image src="/images/rectangle-40@2x.png" width={48} height={48} alt="{item.title}" className='rounded-full object-contain   ' />

                    <div className="flex flex-col items-start">
                        <h3 className='text-slate-900 text-lg md:text-xl font-bold  '>Seko </h3>
                        <p className='text-slate-700  text-xs font-normal  '>Software Eneginer</p>
                    </div>
                </div>
                <p className='text-slate-700  text-xs font-normal  '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
            </div>
        </>
    )
}