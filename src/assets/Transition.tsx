import {motion} from "framer-motion"

export default function Transition() {

    const varients = {
        initial: {
            x: '100%',
            width:'100%'
        },
        animate: {
            x: '0%',
            width: '0%'
        },
        exit: {
            x: ['0%' , '100%'],
            width: ['0%' , '100%']
        }
    }

    return(
        <>
            <motion.div  className="fixed right-full top-0 bottom-0 z-30 h-screen w-screen bg-blue-400"
            variants={varients} 
            initial='initial' 
            animate='animate' 
            exit='exit'
            transition={{delay:0.2 , duration:0.6, ease: 'easeInOut'}}
            ></motion.div>
            <motion.div className="fixed right-full top-0 bottom-0 z-30 h-screen w-screen bg-blue-400/60"
            variants={varients} 
            initial='initial' 
            animate='animate' 
            exit='exit'
            transition={{delay:0.4 , duration:0.6, ease: 'easeInOut'}}
            ></motion.div>
            <motion.div className="fixed right-full top-0 bottom-0 z-30 h-screen w-screen bg-blue-400/40"
            variants={varients} 
            initial='initial' 
            animate='animate' 
            exit='exit'
            transition={{delay:0.6 , duration:0.6, ease: 'easeInOut'}}
            ></motion.div>
            
        </>
    )
}