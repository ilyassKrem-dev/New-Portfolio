import { fadeIn } from "@/varients/variants"
import {motion} from "framer-motion"
import Workbtn from "@/assets/Worksbtn"
export default function Homemain() {
    
    
    return (
        <main className="h-full">
            <div className="w-full h-full">
                <div className="text-center flex flex-col xl:text-left justify-center h-full container xl:pt-40 mx-auto">
                    <motion.h1 
                    initial="hidden" 
                    animate="show"
                    variants={fadeIn('down' , 0.6)}  className="h1">
                        Hi,<br /> 
                        My name is {' '}
                        <span className=" text-blue-400"> Ilyass</span>
                    </motion.h1>
                    <motion.p 
                    initial="hidden" 
                    animate="show" 
                    variants={fadeIn('down' , 0.8)}  className="max-w-50 text-black xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 font-[400]">
                        I'm a front-end developper
                    </motion.p>
                    <motion.div 
                    initial="hidden" 
                    animate="show" 
                    variants={fadeIn('down' , 0.8)} className="flex justify-center xl:hidden relative">
                        <Workbtn />
                    </motion.div>
                    <motion.div 
                    initial="hidden" 
                    animate="show" 
                    variants={fadeIn('down' , 0.8)} className="hidden xl:flex">
                        <Workbtn />
                    </motion.div>
                </div>
            </div>
        </main>
    )
}