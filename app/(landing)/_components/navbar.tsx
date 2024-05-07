import { Button } from "@/components/ui/button";
import Logo from "../../../components/logo";

const Navbar = () => {
  return (
    <div className="w-full px-10">
      <div className="custom-container py-[10px] flex justify-between items-center ">
        <div className="hidden xl:block">
          <Logo fillLeft="#9619BF" fillRight="#FFCC00" />
        </div>
        <div className="xl:hidden block">
          <Logo fillLeft="#9619BF" fillRight="#FFCC00" />
        </div>
        <Button className="bg-[#9619BF]  text-white  w-[200px] font-semibold p-0 xl:w-[200px] text-xs xl:text-sm h-[36px] xl:h-[50px]">
          I’m an Interested Business
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
