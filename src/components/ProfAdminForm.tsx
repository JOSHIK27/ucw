"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { profSchema } from "@/lib/zod";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { Card } from "./ui/card";
import { universityProp } from "@/lib/types";

export default function ProfAdminForm({ data }: { data: universityProp[] }) {
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(profSchema),
  });

  const onsubmit = async (values: any) => {
    try {
      const response = await fetch("api/professor", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          university: getValues().university.value,
        }),
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
        <Card className="relative mx-auto mt-40 rounded-lg px-8 py-8 shadow-xl md:w-[500px]">
          <div className="text-[25px] font-bold text-[#37508a]">Prof Form</div>
          <Separator className="my-[8px]" />
          <form onSubmit={handleSubmit(onsubmit)}>
            <label>Name</label>
            <Input {...register("prof")} placeholder="Enter Name" />
            {errors?.prof && (
              <p className="text-sm text-red-700">
                {errors.prof.message?.toString()}
              </p>
            )}
            <label>University</label>
            <Controller
              name="university"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    ...data.map((item) => ({
                      value: item.name,
                      label: item.name,
                    })),
                  ]}
                />
              )}
            />
            {errors?.university && (
              <p className="text-sm text-red-700">
                {errors.university?.message?.toString()}
              </p>
            )}
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-4 w-full bg-[#315196] hover:bg-[#2d4069]"
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
