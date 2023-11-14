import Link from "next/link"
import { RiGithubLine, RiBehanceLine , RiLinkedinBoxLine } from "react-icons/ri";

export default function Socials() {


    return(
        <div className="flex items-center gap-x-6 text-xl">
            <Link href={"/"} className=" hover:text-blue-400 transition-all duration-300">
                <RiBehanceLine />
            </Link>
            <Link href={"/"} className=" hover:text-blue-400 transition-all duration-300">
                <RiGithubLine />
            </Link>
            <Link href={"/"} className=" hover:text-blue-400 transition-all duration-300">
                <RiLinkedinBoxLine />
            </Link>
        </div>
    )
}