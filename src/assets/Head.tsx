import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials"
export default function Head() {


    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center gap-y-6 py-6 lg:px-14 lg:flex-row">
                    <Link href={'/'}>
                        <Image src={"/logo.png"} width={280} height={280} priority={true} alt="" />
                    </Link>
                    
                    <Socials />
                    
                </div>
            </div>
        </header>
    )
}