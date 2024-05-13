import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InterestedBussinessForm from "./InterestedBussinessForm";

const InterestedBussinessModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#9619BF]  text-white  w-[200px] font-semibold p-0 xl:w-[200px] text-xs xl:text-sm h-[36px] xl:h-[50px]">
          I’m an Interested Business
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[1440px] !rounded-[20px] p-0 border-none">
        <InterestedBussinessForm />
      </DialogContent>
    </Dialog>
  );
};

export default InterestedBussinessModal;
