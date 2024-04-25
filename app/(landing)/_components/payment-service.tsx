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
    <div className="py-[128px]  bg-white ">
      <div className="px-[320px]">
        <div className="flex justify-between items-center">
          {servies.map((service) => (
            <div key={service.name}>
              <Image
                height={50}
                width={50}
                src={service.icon}
                alt={service.name}
              />
            </div>
          ))}
        </div>
        <p className="mt-[24px] text-center text-[#93849A] text-[20px]">
          People, project, and pay. In that order. I care deeply about the
          people that I work with because developing a good working relationship
          with others is what makes projects successful.
        </p>
      </div>
    </div>
  );
};

export default PaymentService;
