import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  MessageSquare,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InterviewPage() {
  return (
    <div className="h-[calc(100vh-65px)] bg-background">
      <div className="grid h-full grid-cols-12 gap-6 p-6">

        {/* Left */}
        <div className="col-span-3 flex flex-col gap-4">

    

        </div>

        {/* Center */}
        <div className="col-span-4 flex items-center justify-center">

          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/30 blur-3xl" />

            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border bg-card">
              <span className="text-4xl font-bold">m.</span>
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="col-span-5 flex flex-col justify-center gap-6">

          <div>
            <Badge variant="secondary">
              AI Recruiter
            </Badge>

            <h2 className="mt-4 text-xl font-semibold">
              Hi Gobinda 👋
            </h2>

            <p className="mt-2 text-muted-foreground">
              My name is Zara. Thank you for joining the interview.
              How's your day going so far?
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Recording...
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">

        <Button size="icon" variant="outline">
          <Mic />
        </Button>

        <Button size="icon" variant="outline">
          <Video />
        </Button>

        <Button size="icon" variant="outline">
          <MessageSquare />
        </Button>

        <Button size="icon" variant="outline">
          <Settings />
        </Button>

        <Button size="icon" variant="destructive">
          <PhoneOff />
        </Button>

      </div>
    </div>
  );
}