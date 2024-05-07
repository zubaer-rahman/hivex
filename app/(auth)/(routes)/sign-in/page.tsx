"use client";
import BarSvg from "@/components/bar-svg";
import Logo from "@/components/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRight } from "lucide-react";
import FormTextField from "@/components/form-text-field";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
});
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="bg-[url('/tingari.png')] bg-right bg-no-repeat  h-full">
      <div className="custom-container flex items-center justify-center h-full">
        <div className="">
          <Logo height={21} width={77} fillLeft="#9619BF" fillRight="#FFCC00" />
          <div className="my-[21px]">
            <BarSvg fill="#9619BF" />
          </div>
          <div className="py-[48px] px-[32px] bg-white shadow-custom">
            <h2 className="text-2xl leading-[100%] text-[#1E1E1E] font-bold">
              Sign in
            </h2>
            <p className="text-[#636C84] text-xs mt-2">
              New user?{" "}
              <span className="underline text-[#9619BF]">
                Create an account
              </span>
            </p>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-[24px]"
              >
                <FormTextField
                  name="email"
                  placeholder="...@email.com"
                  label="Email"
                  className="h-[40px] bg-[#F2F5F7] placeholder:text-[13px] placeholder:text-[#959595] border-none"
                />

                <Button
                  type="submit"
                  className="rounded-lg text-sm font-semibold bg-[#9619BF] h-[50px] min-w-[500px] hover:bg-sky-700"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4 text-white" />
                </Button>
              </form>
            </FormProvider>
            <div className="flex justify-between items-center gap-2 my-[24px]">
              <p className="text-sm text-[#636C84] font-semibold">
                Continue with
              </p>
              <div className="flex gap-2">
                <a
                  target="_blank"
                  href="/"
                  className="border hover:border-[#9619BF] rounded-full w-[31px] h-[31px] flex justify-center items-center "
                >
                  <Image
                    src="/google.svg"
                    alt="google"
                    width={14}
                    height={14}
                  />
                </a>
                <a
                  target="_blank"
                  href="/"
                  className="border hover:border-[#9619BF]   rounded-full"
                >
                  <Image src="/fb.svg" alt="facebook" width={31} height={31} />
                </a>
                <a
                  target="_blank"
                  href="/"
                  className="border hover:border-[#9619BF]  rounded-full "
                >
                  <Image src="/apple.svg" alt="apple" width={31} height={31} />
                </a>
              </div>
            </div>
            <p className="text-xs text-[#9619BF] underline">
              Get help signing in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
