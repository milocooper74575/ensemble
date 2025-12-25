"use client";

import ActionHeader from "@/components/layout/ActionHeader";
import Left from "@/components/layout/Left";
import Right from "@/components/layout/Right";

export default function Home() {
  return (
    <div className="bg-[#FAF9F5] p-3">
      <ActionHeader />
      <div className="grid grid-cols-[1fr_260px]">
        <Left />
        <Right />
      </div>
    </div>
  );
}
