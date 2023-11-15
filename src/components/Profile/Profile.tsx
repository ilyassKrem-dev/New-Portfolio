

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobephotoshop,
  } from "react-icons/si";
  
  
  //  data
  const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma />, <SiAdobephotoshop />],
        },
      ],
    }
  ];
import Brush from "@/assets/Brush";
import Avatar from "@/assets/Avatar";
import {motion} from 'framer-motion';
import { fadeIn } from "@/varients/variants";
export default function Profile() {
    
    return (
        <div className="h-full text-center xl:text-left py-16 xl:py-32 xl:mx-[80px]">
            <Brush />
            <motion.div 
            variants={fadeIn('right',0.2)}
            initial="hidden"
            animate="show"  
            className="hidden xl:flex absolute -bottom-4 -left-[380px]">
                <Avatar />
            </motion.div>
            <div 
            className=" container h-full flex items-center mx-auto flex-col xl:flex-row gap-x-6 mt-20 xl:mt-0">
                <div 
                className="flex-1 flex flex-col justify-center">
                    <motion.h2
                    variants={fadeIn('right',0.3)}
                    initial="hidden"
                    animate="show" 
                    className="h2">
                        I'am a <span className=" text-blue-400">Full Stack</span> developper
                    </motion.h2>
                    <motion.p
                    variants={fadeIn('right',0.3)}
                    initial="hidden"
                    animate="show" 
                    className="text-black/80 max-w-[500px] mx-auto mb-6 px-2 xl:mx-0 xl:mb-12 xl:px-0 font-[400]">I am always motivated to make new things and very good at adapting to new environments.
                    </motion.p>
                    
                </div>
                <motion.div
                variants={fadeIn('left',0.5)}
                initial="hidden"
                animate="show" 
                className="flex flex-col text-black w-full 
                h-[480px] xl:max-w-[48%]">
                    <div className="flex relative z-10 mx-auto xl:mx-0 gap-x-4 xl:gap-x-8 mb-4">
                        {aboutData.map((item,itemIndex) => {
                            return (
                                <div key={itemIndex} className={` before:font-semibold after:w-4  realtive cursor-pointer  xl:text-lg after:h-[2px] capitalize after:bg-black after:absolute after:left-0 after:-bottom-1 hover:after:w-[100%] xl:hover:after:w-[10%] hover:after:bg-blue-400 hover:text-blue-400 hover:after:transition-all hover:after:duration-300
                                hover:transition-all hover:duration-300`}>{item.title}</div>
                            )
                        })}

                    </div>
                    <div className="py-2 xl:py-6 flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center">
                        {aboutData[0].info.map((item , itemIndex) => {
                            return (
                                <div key={itemIndex} className="flex flex-1 flex-col xl:flex-row gap-x-2 items-center  ">
                                    <div className="xl:mr-6 font-light">{item.title}</div>
                                    <div className="flex gap-x-4">
                                        {item.icons?.map((icon,itemIndex) => {
                                            return (
                                                <div key={itemIndex} className="flex gap-x-4 text-3xl text-blue-400 my-4">{icon}</div>
                                            )   
                                            
                                        })}
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
        
    )
    
}