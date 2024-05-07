"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "© HiveX", href: "/" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/term" },
  { name: "Contacts", href: "/contact" },
];
const Footer = () => {
  const pathname = usePathname();
  const isSignInPage = pathname?.includes("/sign-in");

  return (
    <div
      className={` ${
        isSignInPage ? "w-full" : "w-[50%]"
      } flex justify-center  pb-[60px] pt-[40px] `}
    >
      <div className="flex justify-between items-center w-[271px] ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "text-[#93849A] text-xs font-semibold hover:animate-bounce",
              link.name === "© HiveX" && "text-sm font-normal"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
