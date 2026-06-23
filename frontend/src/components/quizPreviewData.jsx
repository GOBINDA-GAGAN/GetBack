import { Sparkles } from "lucide-react";
import robotimage from "../assets/sidebar/robot.png"

export const QuizPreview = ({ quizData }) => {
    return (
        <div className=" border bg-secondary rounded-2xl h-fit p-4">
            <div className="bg-card p-4 rounded-md">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="size-5 text-primary" />
                    </div>

                    <div>
                        <h2 className="font-semibold">Quiz Preview</h2>
                        <p className="text-[11px] text-muted-foreground">
                            Here's what your quiz will look like
                        </p>
                    </div>
                </div>
                {quizData.previewItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="flex justify-between items-center py-4 border-b border-secondary"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="size-4 text-primary" />
                                <span className="text-sm text-muted-foreground">
                                    {item.label}
                                </span>
                            </div>

                            <div className="text-sm">{item.value}</div>
                        </div>
                    );
                })}
            </div>


            <div className="mt-6 p-4 border  rounded-xl bg-card">
                <h3 className="font-medium mb-4">What you'll get</h3>

                <div className="space-y-3">
                    {quizData.benefits.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm">
                            <Sparkles className="size-4 text-primary" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">

                <img src={robotimage} className=" rounded-md boder" alt="" srcset="" />
            </div>

        </div>
    );
}