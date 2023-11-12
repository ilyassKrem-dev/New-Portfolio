import Image from "next/image"

export default function TopLeftImg() {


    return (
        <div className="absolute -top-20 -left-20 z-10 opacity-50 mix-blend-color-dodge w-[200px] xl:w-[250px]" >
            <Image priority  src="/top-left.png" alt="" width={400} height={400}/>
        </div>
    )
}