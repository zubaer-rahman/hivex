import { Button } from "@/components/ui/button";
import Logo from "../../../components/logo";
import InterestedBussinessModal from "./InterestedBussinessModal";

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
        <InterestedBussinessModal />
      </div>
    </div>
  );
};

export default Navbar;
