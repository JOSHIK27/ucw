"use client";
import Select from "react-select";
import { useState } from "react";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import { z } from "zod";
import { multiFormSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import "@smastrom/react-rating/style.css";
import { ThinStar } from "@smastrom/react-rating";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { useEffect } from "react";
type Inputs = z.infer<typeof multiFormSchema>;
import { Controller } from "react-hook-form";
import { useToast } from "./ui/use-toast";

const steps = [
  {
    id: "Step 1",
    name: "Course Information",
    fields: ["university", "course"],
  },
  {
    id: "Step 2",
    name: "Experience",
    fields: ["year", "experience"],
  },
  {
    id: "Step 3",
    name: "Ratings",
    fields: ["overallStars", "courseDepthStars", "recommendStars"],
  },
  { id: "Step 4", name: "Complete" },
];

type coursePropItem = {
  id: Number;
  name: string;
  prof_id: Number;
  university: string;
};

export default function MultiForm({
  universityList,
  courseList,
}: {
  universityList: string[];
  courseList: coursePropItem[];
}) {
  const { toast } = useToast();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [courses, setCourses] = useState<coursePropItem[] | any>([]);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(multiFormSchema),
  });
  const watchUniversity = watch("university");

  useEffect(() => {
    const updatedCourses = courseList.filter((item) =>
      item.university == (watchUniversity ? watchUniversity.value : "")
        ? true
        : false,
    );
    setCourses(updatedCourses);
  }, [watchUniversity]);

  const processForm = async (values: any) => {
    try {
      const response = await fetch("api/review", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          course: values["course"].value,
          university: values["university"].value,
          year: values["year"].value,
        }),
      });
      if (!response) throw new Error("Some Server Error");
      toast({
        title: "Server Response",
        description: "Successfully added",
      });
    } catch (error) {
      alert(error);
    }
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    console.log(getValues());

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className=" flex min-h-screen flex-col justify-normal bg-[#F2FAFE] px-40 pt-32">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 flex justify-center">
        <Card className="rounded-lg p-8 font-semibold shadow-lg">
          <form onSubmit={handleSubmit(processForm)}>
            {currentStep === 0 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="text-[20px] text-[#315196]">
                  Enter course details
                </div>
                <Separator className="my-[8px]" />
                <label>University</label>
                <Controller
                  name="university"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="w-[400px]"
                      options={[
                        ...universityList.map((item) => ({
                          value: item,
                          label: item,
                        })),
                      ]}
                    />
                  )}
                  rules={{ required: true }}
                />
                {errors?.university && (
                  <p className="text-sm text-red-700">
                    {errors.university.message?.toString()}
                  </p>
                )}

                <label>Course</label>
                <Controller
                  name="course"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        ...courses.map((item: coursePropItem) => ({
                          value: item.name,
                          label: item.name,
                        })),
                      ]}
                    />
                  )}
                />
                {errors?.course && (
                  <p className="text-sm text-red-700">
                    {errors.course.message?.toString()}
                  </p>
                )}
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="text-[20px] text-[#315196]">
                  Share your experience
                </div>
                <Separator className="my-[8px]" />
                <label>Year</label>
                <Controller
                  name="year"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="w-[400px]"
                      options={[
                        ...[2020, 2021, 2022, 2023, 2024].map((item) => ({
                          value: item,
                          label: item,
                        })),
                      ]}
                    />
                  )}
                />
                {errors?.year && (
                  <p className="text-sm text-red-700">
                    {errors.year.message?.toString()}
                  </p>
                )}
                <label>Experience</label>
                <Textarea
                  {...register("experience")}
                  placeholder="Share..."
                  className="w-[400px]"
                />
                {errors?.experience && (
                  <p className="text-sm text-red-700">
                    {errors.experience.message?.toString()}
                  </p>
                )}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4">
                  <div className="text-[20px] text-[#315196]">
                    Rate the following
                  </div>
                  <Separator className="my-[8px]" />
                  <label>Overall Experience</label>
                  <Controller
                    control={control}
                    name="overallStars"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Rating
                        style={{ width: 300 }}
                        itemStyles={{
                          itemShapes: ThinStar,
                          activeFillColor: "#f59e0b",
                          inactiveFillColor: "#ffedd5",
                        }}
                        onChange={onChange}
                        isRequired
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors?.overallStars && (
                    <p className="text-sm text-red-700">
                      {errors.overallStars.message?.toString()}
                    </p>
                  )}
                  <label>Course Depth</label>
                  <Controller
                    control={control}
                    name="courseDepthStars"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Rating
                        style={{ width: 300 }}
                        itemStyles={{
                          itemShapes: ThinStar,
                          activeFillColor: "#f59e0b",
                          inactiveFillColor: "#ffedd5",
                        }}
                        onChange={onChange}
                        isRequired
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors?.courseDepthStars && (
                    <p className="text-sm text-red-700">
                      {errors.courseDepthStars.message?.toString()}
                    </p>
                  )}
                  <label>Would you suggest it?</label>
                  <Controller
                    control={control}
                    name="recommendStars"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Rating
                        style={{ width: 300 }}
                        itemStyles={{
                          itemShapes: ThinStar,
                          activeFillColor: "#f59e0b",
                          inactiveFillColor: "#ffedd5",
                        }}
                        onChange={onChange}
                        isRequired
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors?.recommendStars && (
                    <p className="text-sm text-red-700">
                      {errors.recommendStars.message?.toString()}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Complete
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Thank you for your submission.
                </p>
              </motion.div>
            )}
          </form>
          <div className="mt-8 pt-0">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
