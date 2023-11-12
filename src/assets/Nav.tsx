import { ImHome3 , ImUser, ImStack , ImBook  } from "react-icons/im";
import Link from "next/link";

import {usePathname} from "next/navigation";
export const navData = [
    {name:'home', path:'/', icon:<ImHome3 />},
    {name:'profile', path:'/profile', icon:<ImUser />},
    {name:'work', path:'/work', icon:<ImStack />},
    {name:'contact', path:'/contact', icon:<ImBook />}
]


export default function Nav() {

    const pathname = usePathname()
    return (
        <nav className="h-max fixed bottom-0 flex   flex-col w-full top-0 z-50 xl:justify-center items-center gap-y-4 mt-auto xl:w-16 xl:max-w-md xl:h-screen xl:right-[2%]">

            <div className="flex w-full xl:flex-col justify-between xl:justify-center items-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] py-8 xl:h-max bg-blue-400 backdrop-blur-sm xl:rounded-full text-white text-3xl xl:text-xl">
                {navData.map((item, index) => {
                return (
                <Link key={index} href={item.path} className={` ${item.path === pathname && "text-black/30"} relative flex items-center group hover:text-black/30 transition-all duration-300`}>
                    <div className="absolute hidden xl:group-hover:flex right-0  pr-14">
                        <div className="relative flex items-center bg-blue-400 p-[6px] rounded-[3px]"> 
                            <div className="text-white text-sm leading-none font-semibold">
                                <div className=" capitalize">
                                    {item.name}
                                </div>
                                <div className="absolute top-2 -right-4 border-solid border-l-blue-400 border-l-8 border-y-[6px] border-r-8 border-y-transparent border-r-transparent" >
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        {item.icon}
                    </div>
                </Link>
                )
            })}

            </div>
        </nav>
    )
}