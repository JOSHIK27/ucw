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
    <div className="flex justify-center mt-20 ">
      <div className="font-semibold shadow-lg rounded-lg p-8">
        <div className="text-[#315196] text-[20px]">University Form</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)} className="">
          <label>Name</label>
          <Input
            {...register("university")}
            placeholder="Enter Name"
            className="w-[400px]"
          />
          {errors?.university && (
            <p className="text-red-700 text-sm">
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
            <p className="text-red-700 text-sm">
              {errors.country?.message?.toString()}
            </p>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-[400px] bg-[#315196] hover:bg-[#2d4069] mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
