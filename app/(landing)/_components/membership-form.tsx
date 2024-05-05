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
import FormTextField from "@/components/form-text-field";

const formSchema = z.object({
  first_name: z.string().min(1, "First Name is required"),
  last_name: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required"),
  contact: z.string().min(1, "Email is required"),
  title: z.string().min(1, "Title is required"),

  dob: z.string(),
  offer_code: z.string(),
});

const MembershipForm = () => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      title: "",
      dob: "",
      offer_code: "",
    },
  });
  const { isSubmitting, isValid } = methods.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="p-[22px] bg-white shadow-custom min-w-[466px] min-h-[208px]">
      <div className=" ">
        <h1 className="text-[24px] text-[#101010] font-bold">
          {" "}
          Get Free Lifetime Membership
        </h1>
        <p className="text-sm text-[#959595]  ">
          (for 90 Founder Members){" "}
          <span className="text-[#9619BF] line-through">$6.99 per month</span>
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-1 mt-[24px] "
          >
            <div className="flex gap-[8px] w-full justify-between ">
              <div className="w-full">
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

            <FormTextField name="email" label="Email" placeholder="type" />

            <FormTextField name="contact" placeholder="+880" label="Contact" />
            <FormField
              control={methods.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred offer</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F2F5F7] border-none"
                      disabled={isSubmitting}
                      {...field}
                      placeholder="Select"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-[8px] w-full justify-between">
              <div className="w-full">
                <FormTextField name="dob" placeholder="type" label="DOB" />
              </div>
              <div className="w-full">
                <FormTextField
                  name="offer_code"
                  placeholder="type"
                  label="Offer Code"
                />
              </div>
            </div>

            <div className="py-4">
              <Button
                type="submit"
                className="bg-[#9619BF] text-[16px] rounded-lg w-full h-[50px]"
              >
                Join Our Waitlist
                <ChevronRight className="h-4 w-4  ml-2" />
              </Button>
            </div>
            {/* <DevTool control={methods.control} /> */}
          </form>
        </FormProvider>
        <p className="text-xs text-[#636C84] text-center">
          I agree with the{" "}
          <Link href={"/"} className="text-[#9619BF] underline text-xs">
            {" "}
            Terms and Policies
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MembershipForm;
