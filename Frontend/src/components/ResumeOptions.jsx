import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import dumyresumeSvg from "../assets/svg/dumyResume.svg"
import dumyblankSvg from "../assets/svg/dumyBlank.svg"
export default function ResumeCards() {
    return (
        <div className=" gap-8 p-2 flex justify-center items-center">
            <div className=" hover:scale-105 transition-all ease-out duration-300 bg-[linear-gradient(180deg,var(--card-orange-from),var(--card-orange-via),var(--card-orange-to))] 
            border-4 mix-w-[100px] mix-h-[200px] bg-orange text-white p-4 rounded-2xl flex flex-col gap-2 justify-center">
                <div className="flex items-center justify-center w-full h-full">
                    <img src={dumyresumeSvg} alt="" srcset="" className="h-full w-75 object-contain" />
                </div>
                <h1 className="font-semibold text-lg">Upload resuma</h1>
                <p className="text-[11px]">Imporove your Confidence</p>
                <Button className="bg-[linear-gradient(0deg,var(--button-orange-from),var(--button-orange-to))] rounded-xl  w-fit">Upload File</Button>
            </div>

            <div className="relative flex items-center justify-center px-16">

                {/* Left Dashed Curve */}
                <svg
                    className="absolute right-1/2 translate-x-[-30px]"
                    width="80"
                    height="30"
                    viewBox="0 0 80 30"
                >
                    <path
                        d="M80 15 Q40 0 0 15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                </svg>

                <div className="bg-accent h-8 w-8 rounded-full flex items-center justify-center z-10">
                    <span className="text-[11px] font-bold">Or</span>
                </div>

                {/* Right Dashed Curve */}
                <svg
                    className="absolute left-1/2 translate-x-[30px]"
                    width="80"
                    height="30"
                    viewBox="0 0 80 30"
                >
                    <path
                        d="M0 15 Q40 30 80 15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                </svg>

            </div>
            <div className=" hover:scale-105 transition-all ease-out duration-300 border-4  mix-w-[100px] mix-h-[200px] bg-[linear-gradient(180deg,var(--card-blue-from),var(--card-blue-via),var(--card-blue-to))]
             text-white p-4 rounded-2xl flex flex-col gap-2 justify-center">
                <div className="flex items-center justify-center w-full h-full">

                    <img src={dumyblankSvg} alt="" srcset="" className="h-full w-75 object-contain" />
                </div>
                <h1 className="font-semibold text-lg">Continu without resuma</h1>
                <p className="text-[11px]">Fill in your details manually ot get started</p>
                <Button className="bg-[linear-gradient(0deg,var(--button-from),var(--button-to))] rounded-xl w-fit">Continue Manually</Button>
            </div>



        </div>
    );
}