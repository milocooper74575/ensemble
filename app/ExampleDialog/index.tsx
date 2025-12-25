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

interface ExampleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExampleDialog: React.FC<ExampleDialogProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>示例</DialogTitle>
          <DialogDescription>查看和编辑示例内容</DialogDescription>
        </DialogHeader>
        <FieldGroup className="pb-3">
          <Field>
            <Input id="example" name="example" placeholder="请输入示例内容" />
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

export default ExampleDialog;
