"use client";

import ActionHeader from "./ActionHeader";
import Left from "./Left";
import Right from "./Right";

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
