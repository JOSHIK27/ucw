"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { universityFormSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { Card } from "./ui/card";

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
    <section className="w-full">
      <div className="absolute h-[250px] w-full bg-[#4f6fb9]">
        <Card className="relative mx-auto mt-40 w-[500px] rounded-lg px-8 py-8 shadow-xl">
          <div className="text-[25px] font-bold text-[#37508a]">
            University Form
          </div>
          <Separator className="my-[8px]" />
          <form onSubmit={handleSubmit(onsubmit)} className="">
            <label>Name</label>
            <Input {...register("university")} placeholder="Enter Name" />
            {errors?.university && (
              <p className="text-sm text-red-700">
                {errors.university.message?.toString()}
              </p>
            )}
            <label>Country</label>
            <Input {...register("country")} placeholder="Enter Country" />
            {errors?.country && (
              <p className="text-sm text-red-700">
                {errors.country?.message?.toString()}
              </p>
            )}
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-4 w-full bg-[#315196] hover:bg-[#2d4069]"
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
