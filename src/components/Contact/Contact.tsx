import Brush from "@/assets/Brush"
import { fadeIn } from "@/varients/variants";
import {motion} from 'framer-motion'
import { useState} from "react"
import {BsArrowRight} from "react-icons/bs"

export default function Contact() {
    const [userInfo , setUserInfo] = useState({
        name: "", email:"" , subject:"",message:""
    })

    function handleChange(event:any) {
        const {name , value} = event.target
        setUserInfo(prev => {
            return {...prev,
                [name]: value}
        })
    }
    function handleSubmit(event:any) {
        event.preventDefault();
        if(userInfo.email != "" && userInfo.message != "") {
            console.log('Your message have been sended')
        }
      }
      
    return (
        <div className="h-full mt-10 xl:mt-0">
            <Brush />
            <div className=" container mx-auto py-32 h-full flex items-center justify-center text-center xl:text-left ">
                <div className="flex items-center justify-center flex-col w-full max-w-[700px]">
                    <motion.h2
                    variants={fadeIn('up' , 0.2)} 
                    initial="hidden"
                    animate='show'
                    className=" h2 mb-12">Contact <span className="text-blue-400">Me.</span>
                    </motion.h2>

                    <motion.form
                    variants={fadeIn('down' , 0.4)} 
                    initial="hidden"
                    animate='show' 
                    onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        <div className="flex gap-4 w-full">
                            <input type="text" onChange={handleChange} name="name" value={userInfo.name} placeholder="name"  className="input placeholder:text-black/70"/>
                            <input type="email" onChange={handleChange} name="email" value={userInfo.email} placeholder="email" className="input placeholder:text-black/70"/>
                        </div>
                        <input type="text" onChange={handleChange} name="subject" value={userInfo.subject} placeholder="Subject" className="input placeholder:text-black/70"/>
                        <textarea placeholder="Message" onChange={handleChange} value={userInfo.message} name="message" className="textarea placeholder:text-black/70"></textarea>
                        <button className="btn border border-blue-400 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden rounded-full hover:border-blue-800 group active:bg-blue-800">
                            <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300 group-active:text-white">Contact</span>
                            <BsArrowRight className="text-blue-800 text-2xl -translate-y-[120%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:flex transition-all duration-500 group-active:text-white"/>
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}