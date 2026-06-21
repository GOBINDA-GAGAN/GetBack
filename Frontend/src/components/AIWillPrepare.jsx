import { Sparkles, CircleCheck } from "lucide-react";

export default function AIWillPrepare() {
    const features = [
        "Personalized Questions",
        "Company-Specific Questions",
        "Coding Challenges",
        "HR & Behavioral Questions",
        "Instant Feedback & Score",
        "Improvement Suggestions",
    ];

    return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
            {/* Header */}
            <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-600" />
                <h3 className="text-sm font-semibold text-slate-800">
                    AI Will Prepare
                </h3>
            </div>

            {/* Features */}
            <div className="space-y-3">
                {features.map((feature) => (
                    <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700"
                    >
                        <CircleCheck className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}