"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { profSchema } from "@/lib/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

type propsType = {
  id: Number;
  name: string;
  country: string;
};

export default function ProfAdminForm({ data }: { data: propsType[] }) {
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(profSchema),
  });

  const onsubmit = async (values: any) => {
    console.log(values);
    try {
      const response = await fetch("api/professor", {
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
        <div className="text-[#315196] text-[20px]">Prof Form</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)} className="">
          <label>Name</label>
          <Input
            {...register("prof")}
            placeholder="Enter Name"
            className="w-[400px]"
          />
          {errors?.prof && (
            <p className="text-red-700 text-sm">
              {errors.prof.message?.toString()}
            </p>
          )}
          <label>University</label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="This Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data.map((item, index) => (
                  <SelectItem key={index} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors?.university && (
            <p className="text-red-700 text-sm">
              {errors.university?.message?.toString()}
            </p>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-[400px] bg-[#315196] hover:bg-[#2d4069] mt-4"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
