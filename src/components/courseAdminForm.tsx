"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseSchema } from "@/lib/zod";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { universityProp, profProp } from "@/lib/types";

export default function CourseAdminForm({
  university,
  prof,
}: {
  university: universityProp[];
  prof: profProp[];
}) {
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    getValues,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(courseSchema),
  });

  const watchUniversity = watch("university");

  const [taughtBy, setTaughtBy] = useState<profProp[]>([]);

  useEffect(() => {
    const uni_ids: Number[] = [];

    university.forEach((item) => {
      if (item.name == (watchUniversity ? watchUniversity.value : ""))
        uni_ids.push(item.id);
    });

    const updatedTaughtBy = prof.filter(
      (item) => uni_ids.includes(item.university_id) == true,
    );
    setValue("prof", null);
    setTaughtBy(updatedTaughtBy);
  }, [watchUniversity]);

  const onsubmit = async () => {
    let prof_id;
    taughtBy.forEach((item) => {
      if (item.name == getValues().prof.value) {
        prof_id = item.id;
      }
    });

    try {
      const response = await fetch("api/course", {
        method: "POST",
        body: JSON.stringify({
          course: getValues().name,
          university: getValues().university.value,
          prof_id,
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
        <div className="text-[20px] text-[#315196]">Course Form</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)}>
          <label>Name</label>
          <Input
            {...register("name")}
            placeholder="Enter Name"
            className="w-[400px]"
          />
          {errors?.name && (
            <p className="text-sm text-red-700">
              {errors.name.message?.toString()}
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
                  ...university.map((item) => ({
                    value: item.name,
                    label: item.name,
                  })),
                ]}
              />
            )}
          />
          <label>Taught By</label>
          <Controller
            name="prof"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  ...taughtBy.map((item) => ({
                    value: item.name,
                    label: item.name,
                  })),
                ]}
              />
            )}
          />
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
