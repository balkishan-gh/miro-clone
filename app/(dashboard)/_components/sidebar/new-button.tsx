"use client";

import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "@/app/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
