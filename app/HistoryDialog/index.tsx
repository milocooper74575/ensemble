"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface HistoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HistoryDialog: React.FC<HistoryDialogProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>历史版本</DialogTitle>
          <DialogDescription>查看提示词的历史版本</DialogDescription>
        </DialogHeader>
        <FieldGroup className="pb-3">
          <Field>
            <Input id="filename" name="filename" placeholder="document.txt" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button type="submit">确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryDialog;
