import Logo from "../../../components/logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center xl:justify-start flex-shrink-0 h-[66px]">
      <div className="hidden xl:block">
        <Logo />
      </div>
      <div className="xl:hidden block">
        <Logo height={13} width={45} />
      </div>
    </div>
  );
};

export default Navbar;
