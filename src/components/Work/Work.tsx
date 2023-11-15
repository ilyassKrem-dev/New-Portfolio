
import WorkSlider from "@/assets/WorkSlider"
import Brush from "@/assets/Brush"
import {motion} from 'framer-motion'
import { fadeIn } from "@/varients/variants"
export default function Work() {

    return(
        <div className="h-full py-36 flex items-center">
            <Brush />
            <div className=" container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8 xl:mx-20">
                    <div className="flex flex-col text-center xl:text-left mb-4 xl:mb-0 xl:w-[30vw]">
                        <motion.h2
                        variants={fadeIn('up',0.2)}
                        initial="hidden"
                        animate='show'
                        className="h2 xl:mt-8">My Work
                        <span className="text-blue-400">.</span>
                        </motion.h2>
                        <motion.p
                        variants={fadeIn('up',0.3)}
                        initial="hidden"
                        animate='show'
                        className="text-black/80 mx-auto xl:mx-0 mb-4 max-w-[400px] font-[400]">Take a view at some of the projects I've worked on.
                        </motion.p>
                    </div>
                    <motion.div
                    variants={fadeIn('down',0.4)}
                    initial="hidden"
                    animate='show'
                    className="w-full xl:max-w-[65%]">
                        <WorkSlider />
                    </motion.div>
                    
                </div>

            </div>
        </div>
    )
}