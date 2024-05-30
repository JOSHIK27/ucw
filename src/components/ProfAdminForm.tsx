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

type propItem = {
  id: Number;
  name: string;
  country: string;
};

export default function ProfAdminForm({ data }: { data: propItem[] }) {
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
    <div className="mt-20 flex justify-center ">
      <Card className="rounded-lg p-8 font-semibold shadow-lg">
        <div className="text-[20px] text-[#315196]">Prof Form</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)}>
          <label>Name</label>
          <Input
            {...register("prof")}
            placeholder="Enter Name"
            className="w-[400px]"
          />
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
            className="mt-4 w-[400px] bg-[#315196] hover:bg-[#2d4069]"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
