
import WorkSlider from "@/assets/WorkSlider"
import Brush from "@/assets/Brush"
export default function Work() {

    return(
        <div className="h-full py-36 flex items-center">
            <Brush />
            <div className=" container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8 mx-20">
                    <div className="flex flex-col text-center xl:text-left mb-4 xl:mb-0 xl:w-[30vw]">
                        <h2 className="h2 xl:mt-8">My Work
                        <span className="text-blue-400">.</span>
                        </h2>
                        <p className="text-black/70 mx-auto xl:mx-0 mb-4 max-w-[400px]">Some of my projects</p>
                    </div>
                    <div className="w-full xl:max-w-[65%]">
                        <WorkSlider />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}