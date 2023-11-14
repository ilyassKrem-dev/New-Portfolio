import { fadeIn } from "@/varients/variants"
import {motion} from "framer-motion"
import Workbtn from "@/assets/Worksbtn"
import Avatar from "@/assets/Avatar"
import Particales from "@/assets/Particales"
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
            <div className="absolute w-[1200px] right-0 bottom-0 h-full  -z-10">
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:0.8 , duration:0.9 , ease:"easeInOut"}}
                className="bg-none xl:bg-paint xl:bg-cover xl:bg-no-repeat xl:bg-right w-full h-full absolute mix-blend-color-dodge  bottom-40 translate-z-0 -right-[32rem]  max-h-[600px]">
                </motion.div>
                
                <Particales />

                <motion.div
                initial="hidden" 
                animate="show" 
                variants={fadeIn('up' , 0.8)}
                className="w-full h-full max-w-[737px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[0%]">
                    <Avatar/>
                </motion.div>
            </div>
        </main>
    )
}