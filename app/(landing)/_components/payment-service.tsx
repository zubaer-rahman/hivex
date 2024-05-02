import { icons } from "lucide-react";
import Image from "next/image";

const servies = [
  {
    name: "visa",
    icon: "/visa.png",
  },
  {
    name: "amazon pay",
    icon: "/amazon_pay.svg",
  },
  {
    name: "samsung pay",
    icon: "/samsung_pay.svg",
  },
  {
    name: "mastercard",
    icon: "/mastercard.svg",
  },
  {
    name: "google pay",
    icon: "google-pay.svg",
  },
  {
    name: "apple-pay",
    icon: "apple-pay.svg",
  },
  {
    name: "payoneer",
    icon: "payoneer.svg",
  },
  {
    name: "paypal",
    icon: "paypal.svg",
  },
];
const PaymentService = () => {
  return (
    <div className="py-[75px] xl:py-[175px]  bg-white ">
      <div className="custom-container ">
        <div className="grid xl:grid-cols-8 grid-cols-4 gap-4">
          {servies.map((service) => (
            <div
              className="flex justify-center items-center"
              key={service.name}
            >
              <Image
                height={50}
                width={50}
                src={service.icon}
                alt={service.name}
                className="h-[16px] xl:h-auto  w-auto"
              />
            </div>
          ))}
        </div>
        <p className="mt-[19px] xl:mt-[24px] leading-[128%] xl:text-center text-[#93849A] text-xs xl:text-[20px] min-w-[350px] px-4">
          People, project, and pay. In that order. I care deeply about the
          people that I work with because developing a good working relationship
          with others is what makes projects successful.
        </p>
      </div>
    </div>
  );
};

export default PaymentService;
