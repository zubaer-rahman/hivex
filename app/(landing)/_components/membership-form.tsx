"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
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

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  email: z.string().min(1, "Email is required"),
  contact: z.string().min(1, "Email is required"),
});

const MemberShipForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      email: "",
      contact: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async () => {};
  return (
    <div className="p-[32px] bg-white rounded-lg shadow-custom min-w-[466px]  hidden xl:block">
      <h1 className="text-[24px] text-[#101010] font-bold">
        {" "}
        Get Free Lifetime Membership
      </h1>
      <p className="text-sm text-[#959595]  ">
        (for 90 Founder Members){" "}
        <span className="text-[#9619BF] line-through">$6.99 per month</span>
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-[8px] mt-[24px]"
        >
          <div className="flex gap-[8px] w-full justify-between ">
            <div className="w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F2F5F7] border-none"
                        disabled={isSubmitting}
                        {...field}
                        placeholder="type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F2F5F7] border-none"
                        disabled={isSubmitting}
                        {...field}
                        placeholder="type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
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
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DOB</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F2F5F7] border-none"
                        disabled={isSubmitting}
                        {...field}
                        placeholder="type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offercode</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F2F5F7] border-none"
                        disabled={isSubmitting}
                        {...field}
                        placeholder="type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#F2F5F7] border-none"
                    disabled={isSubmitting}
                    {...field}
                    placeholder="type"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#F2F5F7] border-none"
                    disabled={isSubmitting}
                    {...field}
                    placeholder="+880"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link href="/">
            <Button
              type="button"
              className="bg-[#9619BF] text-[16px] rounded-lg w-full h-[50px] my-[24px] "
            >
              Join Our Waitlist
              <ChevronRight className="h-4 w-4  ml-2" />
            </Button>
          </Link>
        </form>
      </Form>
      <p className="text-xs text-[#636C84] text-center">
        I agree with the{" "}
        <Link href={"/"} className="text-[#9619BF] underline text-xs">
          {" "}
          Terms and Policies
        </Link>
      </p>
    </div>
  );
};

export default MemberShipForm;
