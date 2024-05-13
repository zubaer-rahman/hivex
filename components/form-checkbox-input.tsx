"use client";

import { Checkbox } from "@/components/custom-check";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface FormCheckboxInputProps {
  name: string;
  className?: string;
  label?: string;
}
export function FormCheckboxInput({
  name,
  label,
  className,
}: FormCheckboxInputProps) {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem
            className={cn(
              "flex space-x-[10px] space-y-0 items-center rounded-md p-3 ",
              className
            )}
          >
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="leading-0 translate-y-[1px] text-[#1E1E1E] text-[13px] ">
              {label}
            </FormLabel>
          </FormItem>
          <FormMessage />
        </>
      )}
    />
  );
}
