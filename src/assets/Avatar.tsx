import Image from "next/image";


export default function Avatar() {

    return (
        <div className="hidden xl:flex xl:max-w-none ">
            <Image src="/avatar2.png" alt="avatar" width="1200" height="678" 
            className='translate-z-0 w-auto h-auto'/>
        </div>
    )
}