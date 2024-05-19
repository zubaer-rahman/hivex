"use client";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FormTextField from "@/components/form-text-input";

const formSchema = z.object({
  first_name: z.string().min(1, "First Name is required"),
  last_name: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required"),
  contact: z.string().min(1, "Email is required"),
  birth_year: z.string()
});

const MembershipForm = () => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      birth_year: "",
    },
  });
  const { isSubmitting, isValid } = methods.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="py-[22px] bg-white shadow-custom min-w-[466px] min-h-[208px]">
      <div className="opacity-0 animate-[makeVisible_.3s_.3s_forwards]">
        <h1 className="text-[24px] text-[#101010] font-bold  text-center">
          {" "}
          Get Free Lifetime Membership
        </h1>
        <p className="text-sm text-[#959595] text-center  mb-6">
          (for 90 Founder Members){" "}
          <span className="text-[#9619BF] line-through">$6.99 per month</span>
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="">
            <div className="h-0 mb-0 animate-[expandHeight_.6s_.6s_forwards]">
              <div className="invisible animate-[revealFromLeft_1.5s_1s_forwards] ">
                <div className="flex gap-[8px] w-full justify-between px-[24px]">
                  <div className="w-full ">
                    <FormTextField
                      name="first_name"
                      placeholder="type"
                      label="First Name"
                    />
                  </div>
                  <div className="w-full">
                    <FormTextField
                      name="last_name"
                      placeholder="type"
                      label="Last Name"
                    />
                  </div>
                </div>

                <div className="px-[24px] pb-2">
                  <FormTextField
                    name="email"
                    label="Email"
                    placeholder="type"
                  />

                  <FormTextField
                    name="contact"
                    placeholder="+880"
                    label="Contact"
                  />
                  <FormTextField
                    name="birth_year"
                    placeholder="dd/mm/yyyy"
                    label="Year of Birth"
                  />
                </div>
              </div>
            </div>

            <div className="px-[24px]">
              <Button
                type="submit"
                className="bg-[#9619BF] text-[16px] rounded-lg w-full h-[50px]"
              >
                Join Our Waitlist
              </Button>
            </div>
            {/* <DevTool control={methods.control} /> */}
          </form>
        </FormProvider>
        <p className="text-xs text-[#636C84] text-center mt-3">
          I agree with the{" "}
          <Link href={"/"} className="text-[#9619BF]  underline text-xs">
            {" "}
            Terms and Policies
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MembershipForm;
