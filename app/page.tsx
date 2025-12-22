"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ActionHeader from "./ActionHeader";
import PromptActionHeader from "./PromptActionHeader";

export default function Home() {
  return (
    <div className="bg-[#FAF9F5] p-10">
      {/* header */}
      <ActionHeader />

      <div className="grid grid-cols-[1fr_360px]">
        {/* Left */}
        <div className="relative px-8 py-7">
          <PromptActionHeader />
          <div className="flex items-center gap-3 text-[12px] text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-[4px] border border-neutral-300 bg-white" />
              <span>System Prompt</span>
            </div>
            <span className="text-neutral-400">
              Define a role, tone or context (optional)
            </span>
          </div>

          <div className="mt-6">
            <div className="text-[13px] font-medium text-neutral-700">User</div>
            <div className="mt-2 h-[86px] rounded-[12px] border border-neutral-200 bg-white" />

            <div className="mt-3 flex items-center gap-2 text-[12px] text-neutral-400">
              <div className="w-4 h-4 rounded-full border border-neutral-300 bg-white" />
              <span>Generate Prompt</span>
              <span className="text-neutral-300">
                or enter instructions or prompt for Claude…
              </span>
            </div>

            <div className="mt-16 flex items-center justify-end gap-2 text-[12px] text-neutral-400">
              <div className="w-4 h-4 rounded-full border border-neutral-300 bg-white" />
              <span>Add message pair</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative border-l border-neutral-200 bg-[#fbfbf9]">
          <div className="px-10 pt-14">
            <Card className="border-0 shadow-none bg-transparent py-0">
              <CardContent className="px-0">
                <div className="flex flex-col items-center">
                  <div className="w-[148px] h-[148px] rounded-full border border-[#e6def6] flex items-center justify-center">
                    <div className="w-[108px] h-[108px] rounded-full border border-[#d9ccf4] flex items-center justify-center">
                      <div className="w-[70px] h-[70px] rounded-full bg-[#6d4cff] flex items-center justify-center text-white text-[22px] font-semibold">
                        ✦
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-[14px] font-semibold text-neutral-800">
                    You are out of credits
                  </div>
                  <div className="mt-2 text-[12px] text-neutral-500 text-center leading-5">
                    To get started with the Claude API, purchase
                    <br />
                    some credits.
                  </div>

                  <Button className="mt-6 h-9 px-6 rounded-[12px] bg-black hover:bg-black/90">
                    Buy credits
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
