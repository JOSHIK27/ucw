"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { universityFormSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";

export default function UniversityAdminForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(universityFormSchema),
  });

  const onsubmit = async (values: any) => {
    try {
      const response = await fetch("api/university", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Some server side error");
      toast({
        title: "Server Response",
        description: "Successfully added",
      });
    } catch (error) {
      alert(error);
    }

    reset();
  };

  return (
    <div className="mt-20 flex justify-center ">
      <div className="rounded-lg p-8 font-semibold shadow-lg">
        <div className="text-[20px] text-[#315196]">University Form</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)} className="">
          <label>Name</label>
          <Input
            {...register("university")}
            placeholder="Enter Name"
            className="w-[400px]"
          />
          {errors?.university && (
            <p className="text-sm text-red-700">
              {errors.university.message?.toString()}
            </p>
          )}
          <label>Country</label>
          <Input
            {...register("country")}
            placeholder="Enter Country"
            className="w-[400px]"
          />
          {errors?.country && (
            <p className="text-sm text-red-700">
              {errors.country?.message?.toString()}
            </p>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="mt-4 w-[400px] bg-[#315196] hover:bg-[#2d4069]"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
