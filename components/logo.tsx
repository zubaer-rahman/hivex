import Image from "next/image";

const Logo = ({ height = 20, width = 72 }) => {
  return <Image height={height} width={width} alt="logo" src="/logo.png" />;
};

export default Logo;
