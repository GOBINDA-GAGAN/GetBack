import { Mic, Send, Sparkles } from "lucide-react";

export default function AIAssistant() {
  return (
    <div className=" h-62 flex flex-col justify-between rounded-2xl border bg-white p-2 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">
          AI Assistant
        </h2>

        <button className="rounded-full p-1 hover:bg-gray-100">
          <Sparkles size={14} className="text-gray-500" />
        </button>
      </div>

      {/* AI Orb */}
      <div className="flex justify-center py-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl" />
          <div className="h-14 w-14 rounded-full bg-linear-to-br from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_35px_rgba(59,130,246,0.7)]" />
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center rounded-full border bg-gray-50 px-3 py-2">
        <Mic size={16} className="text-gray-400" />

        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 bg-transparent px-2 text-sm outline-none rounded-md placeholder:text-gray-400"
        />

        <button className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}