import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import MemberShipForm from "./membership-form";

const MembershipFormModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="bg-[#9619BF] font-[400] text-xs rounded-lg w-[350px] max- h-[36px] mt-[8px]"
        >
          Join Our Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <MemberShipForm />
      </DialogContent>
    </Dialog>
  );
};

export default MembershipFormModal;
