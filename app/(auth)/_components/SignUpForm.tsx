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

const SignUpForm = () => {
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
    <div className="min-h-[208px] w-[420px] bg-white  py-12 px-5 shadow-md 3xl:shadow-none ">
      <h1 className="text-2xl text-[#1E1E1E] font-bold "> Create an account</h1>
      <p className="text-sm text-[#959595] mt-4">
        Already have an account?
        <span className="text-[#9619BF] underline ">sign in</span>
      </p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="my-6">
            <div className="flex gap-[8px]   justify-between ">
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
            <FormField
              control={methods.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
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
            <FormTextField name="email" label="Email" placeholder="type" />

            <FormTextField
              name="password"
              placeholder="type"
              label="Password"
            />
            <FormTextField
              name="re_password"
              placeholder="type"
              label="Confirm Password"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#9619BF] text-sm font-semibold rounded-lg w-full h-[50px]"
          >
            Continue
            <ChevronRight className="h-4 w-4  ml-2" />
          </Button>
          {/* <DevTool control={methods.control} /> */}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
