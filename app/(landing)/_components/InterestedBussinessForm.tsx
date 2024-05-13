"use client";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormTextField from "@/components/form-text-input";
import { FormCheckboxInput } from "@/components/form-checkbox-input";
import { FormSelectInput } from "@/components/form-select-input";
import { DevTool } from "@hookform/devtools";

const formSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  number: z.string().min(1),
  email: z.string().min(1, "Email is required"),
  title: z.string().min(1),
  organization: z.string().min(1),
  is_interested: z.boolean(),
});

const InterestedBussinessForm = () => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      is_interested: false,
      organization: "",
      name: "",
      role: "",
      number: "",
      email: "",
    },
  });
  const { isSubmitting, isValid } = methods.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="grid md:grid-cols-2 h-[630px] md:gap-12 lg:gap-[96px]">
      <div className="hidden md:block bg-[url('/bg_bussiness-form.png')] rounded-[20px]   bg-cover bg-no-repeat" />
      <div className="flex justify-center items-center md:items-start flex-col md:pr-10">
        <div className="min-w-[420px] md:min-w-[320px]  lg:min-w-[420px]">
          <h1 className="text-[24px] text-[#101010] font-bold leading-[100%]">
            {" "}
            I’m an interested business
          </h1>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="">
              <div className="space-y-2 my-[32px]">
                <FormCheckboxInput
                  name="is_interested"
                  className="bg-[#F2F5F7]"
                  label="I’m Interested in attracting new customers"
                />
                <FormTextField
                  name="first_name"
                  placeholder="Organisation name"
                />
                <FormTextField name="last_name" placeholder="Contact’s name" />
                <FormSelectInput
                  name="role"
                  placeholder="Contact’s job role"
                  className="border-none bg-[#F2F5F7] data-[placeholder]:text-muted-foreground"
                />
                <FormTextField name="email" placeholder="Contact’s number" />
                <FormTextField name="number" placeholder="Contact’s email" />
              </div>

              <Button
                type="submit"
                className="bg-[#9619BF] text-[16px] rounded-lg w-full h-[50px]"
              >
                Venue Expression of Interest{" "}
              </Button>
              {/* <DevTool control={methods.control} /> */}
            </form>
          </FormProvider>
          <p className="text-xs text-[#636C84] mt-3">
            I agree with the{" "}
            <Link href={"/"} className="text-[#9619BF]  underline text-xs">
              {" "}
              Terms and Policies
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestedBussinessForm;
