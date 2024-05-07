"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
interface FormTextFieldProps {
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
}
const FormTextField = ({
  placeholder = "type",
  name,
  label,
  className,
}: FormTextFieldProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className={cn("bg-[#F2F5F7] border-none", className)}
              disabled={isSubmitting}
              {...field}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextField;
