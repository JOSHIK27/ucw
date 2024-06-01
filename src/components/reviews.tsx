"use client";
import { Card } from "./ui/card";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { courseProp } from "@/lib/types";

export default function ReviewsUI({
  universities,
  courses,
}: {
  universities: string[];
  courses: courseProp[];
}) {
  const [courseList, setCourseList] = useState<string[]>([]);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    watch,
    getValues,
  } = useForm();
  const watchUniversity = watch("university");

  useEffect(() => {
    const filteredCourses = courses.filter(
      (item) =>
        item.university ==
        (getValues().university ? getValues().university["value"] : ""),
    );
    const updatedCourseList = filteredCourses.map((item) => item.name);
    setCourseList(updatedCourseList);
  }, [watchUniversity]);

  const onsubmit = async () => {
    try {
      const response = await fetch("api/review", {
        method: "GET",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error);
      }

      const { reviewList, courseList } = await response.json();

      let courseId: Number;
      courseList.forEach((course: courseProp) => {
        if (
          course.university == getValues().university["value"] &&
          course.name == getValues().course["value"]
        ) {
          courseId = course.id;
        }
      });

      const reviews = reviewList.filter(
        (review: any) => review.course_id == courseId,
      );
      console.log(reviews);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="w-full">
      <div className="absolute h-[250px] w-full bg-[#4f6fb9]">
        <Card className="relative mx-auto mt-40 w-[500px] rounded-lg px-8 py-8 shadow-xl">
          <div className="flex items-center text-[25px] font-bold text-[#37508a]">
            <MagnifyingGlassIcon height={28} width={28} className="mr-2" /> Find
            your course!
          </div>

          <Separator className="my-2" />
          <form onSubmit={handleSubmit(onsubmit)}>
            <label>University</label>
            <Controller
              name="university"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    ...universities.map((item) => ({
                      value: item,
                      label: item,
                    })),
                  ]}
                />
              )}
            />
            <label>Course</label>
            <Controller
              name="course"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    ...courseList.map((item) => ({
                      value: item,
                      label: item,
                    })),
                  ]}
                />
              )}
            />
            <br />
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-[#4f6fb9] text-white"
            >
              Fetch Reviews
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
