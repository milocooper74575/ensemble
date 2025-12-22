import { Button } from "@/components/ui/button";

const ActionHeader = () => {
  return (
    <div className="p-6 flex items-center justify-end-safe gap-2">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-8 px-3 rounded border-neutral-300 text-neutral-700"
        >
          Get Code
        </Button>
        <Button className="h-8 px-6 rounded bg-foreground">Run</Button>
      </div>
    </div>
  );
};

export default ActionHeader;
