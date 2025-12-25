"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings2 } from "lucide-react";
import ModelForm from "../form/ModelForm";
import { useState } from "react";
import { formSchema } from "../form/interface";
import z from "zod";

const ModelSetting = () => {
  const [modelId, setModelId] = useState("claude-sonnet-4-5-20250929");
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("model setting submitted:", values);
    setModelId(values.id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-1 py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent text-sm text-neutral-500">
          <Settings2 size={15} />
          <span>{modelId}</span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>配置模型</SheetTitle>
          <SheetDescription>
            选择不同的模型和参数以适应不同的任务需求。
          </SheetDescription>
        </SheetHeader>
        <ModelForm onSubmit={handleSubmit} />
      </SheetContent>
    </Sheet>
  );
};

export default ModelSetting;
