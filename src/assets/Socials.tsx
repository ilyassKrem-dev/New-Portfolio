import Link from "next/link"
import { RiGithubLine, RiBehanceLine , RiLinkedinBoxLine } from "react-icons/ri";

export default function Socials() {


    return(
        <div className="flex items-center gap-x-6 text-xl">
            <Link href={"https://www.behance.net/ilyasskre"} target={'_blank'} className=" hover:text-blue-400 transition-all duration-300">
                <RiBehanceLine />
            </Link>
            <Link href={"https://github.com/ilyassKrem-dev"} target={'_blank'} className=" hover:text-blue-400 transition-all duration-300">
                <RiGithubLine />
            </Link>
            <Link href={"https://www.linkedin.com/in/ilyass-kremcht-695213292"} target={'_blank'} className=" hover:text-blue-400 transition-all duration-300">
                <RiLinkedinBoxLine />
            </Link>
        </div>
    )
}