"use client";
import FormTextField from "@/components/form-text-input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import SignUpForm from "../../_components/SignUpForm";
import Logo from "@/components/logo";
import BarSvg from "@/components/bar-svg";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
});

const Page = () => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const { isSubmitting, isValid } = methods.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-full bg-no-repeat bg-left bg-none lg_xl:bg-[url('/signup-bg.png')] ">
      <div className="custom-container grid grid-cols-1 lg_xl:grid-cols-2 gap-40 h-full">
        <div className="hidden  lg_xl:block">
          <div className="  h-full w-full  relative">
            <div className="absolute bottom-[47px] right-0  py-[46px] ">
              <Logo fillRight="#FFCC00" />
              <div className="my-[21px]">
                <BarSvg />
              </div>
              <p className="text-xs text-white font-semibold">
                Welcome to Hive X where you get the best deals in real time!
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center lg_xl:justify-start">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
