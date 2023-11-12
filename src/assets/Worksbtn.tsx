import Image from "next/image"
import Link from "next/link"
import { HiArrowRight} from 'react-icons/hi2'
export default function Workbtn() {

    return (
        <div className="mx-auto xl:mx-0 ">
            <Link href={'/work'} className=' relative w-[185px] p-2 px-6 bg-blue-400 flex justify-center items-center group rounded-[3px] hover:opacity-90 transition-all duration-200'>
                <div className="text-black w-full h-full max-w-[141px] max-h-[148px] font-semibold text-2xl">My work</div>
                <HiArrowRight className="text-3xl group-hover:translate-x-2 transition-all duration-300"/>
            </Link>
        </div>
    )
}