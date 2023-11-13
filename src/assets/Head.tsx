import Image from "next/image"
import Link from "next/link"
export default function Head() {


    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center gap-y-6 py-6 lg:flex-row">
                    <Link href={'/'}>
                        <Image src={"/logo.png"} width={220} height={48} priority={true} alt="" />
                    </Link>
                    <div>
                        rer
                    </div>
                </div>
            </div>
        </header>
    )
}