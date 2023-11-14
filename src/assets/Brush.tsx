import Image from "next/image"

export default function Brush() {

    return (
        <div className="w-[200px] xl:w-[300px]
        absolute -right-20 bottom-16 xl:-bottom-10 rotate-[30deg] mix-blend-color-dodge animate-pulse duration-200">
            <Image src={'/brush.png'} width={220} height={220} alt="" className='w-full h-full'/>
        </div>
    )
}