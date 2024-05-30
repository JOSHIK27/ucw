"use client";
import { useForm } from "react-hook-form";
import { Separator } from "./ui/separator";
import Select from "react-select";
import { Controller } from "react-hook-form";
import {
  Rating,
  Star,
  ThinStar,
  RoundedStar,
  ThinRoundedStar,
  StickerStar,
} from "@smastrom/react-rating";
export default function PostReview() {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    getValues,
  } = useForm({});
  const onsubmit = () => {};
  return (
    <div className="mt-20 flex justify-center ">
      <div className="rounded-lg p-8 font-semibold shadow-lg">
        <div className="text-[20px] text-[#315196]">Drop a review</div>
        <Separator className="my-[8px]" />
        <form onSubmit={handleSubmit(onsubmit)}>
          <label>University</label>
          <Controller
            name="prof"
            control={control}
            render={({ field }) => (
              <Select
                className="w-[400px]"
                {...field}
                options={[...[].map((item) => ({}))]}
              />
            )}
          />
          <label>Course</label>
          <Controller
            name="prof"
            control={control}
            render={({ field }) => (
              <Select {...field} options={[...[].map((item) => ({}))]} />
            )}
          />
          <label>Overall Rating</label>
        </form>
      </div>
    </div>
  );
}
