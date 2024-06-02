"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Progress } from "@/components/ui/progress";
import { Separator } from "./ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ThinStar } from "@smastrom/react-rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { poppins } from "@/fonts";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { courseProp, reviewProp } from "@/lib/types";

export default function ReviewCard() {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { details } = useParams();

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }),
  );

  useEffect(() => {
    setIsLoading(true);
    async function fetchReviews() {
      try {
        const response = await fetch("../../api/review", {
          method: "GET",
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }

        const { reviewList, courseList } = await response.json();

        let courseId: Number;
        courseList.forEach((course: courseProp) => {
          if (course.university == details[0] && course.name == details[1]) {
            courseId = course.id;
          }
        });

        const reviews = reviewList.filter(
          (review: any) => review.course_id == courseId,
        );
        setIsLoading(false);
        setReviewData(reviews);
      } catch (error) {
        alert(error);
      }
    }
    fetchReviews();
  }, []);

  const stars = React.useMemo(() => {
    let cnt = 0;
    reviewData.forEach(
      (review: reviewProp) => (cnt = cnt + review.overallStars),
    );
    return cnt / reviewData.length;
  }, [reviewData]);

  if (isLoading) return <h1>Loading</h1>;

  if (!reviewData.length)
    return <div className="mt-40 text-center">Data Not Found</div>;
  return (
    <section className="min-h-screen bg-[#F2FAFE]">
      <br />
      <br />
      <br />
      <br />

      <Card className="mx-auto min-h-[500px] max-w-[600px]">
        <CardHeader>
          <CardTitle className="text-center ">Overall Rating</CardTitle>
          <CardDescription className="text-center text-[36px] ">
            {stars ? stars : 0}
            <Rating
              className="mx-auto"
              style={{ maxWidth: 180 }}
              value={stars ? stars : 0}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#f59e0b",
                inactiveFillColor: "#ffedd5",
              }}
              readOnly
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            Excellent
            <Progress className="ml-4 [&>*]:bg-[#315196]" value={33} />
          </div>
          <div className="flex items-center justify-between">
            Excellent
            <Progress className="ml-4 [&>*]:bg-[#315196]" value={50} />
          </div>
          <div className="flex items-center justify-between">
            Excellent
            <Progress className="ml-4 [&>*]:bg-[#315196]" value={60} />
          </div>
          <div className="flex items-center justify-between">
            Excellent
            <Progress className="ml-4 [&>*]:bg-[#315196]" value={10} />
          </div>
          <Separator className="my-4" />

          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[550px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {reviewData.map((review: reviewProp, index) => (
                <CarouselItem key={index}>
                  <ScrollArea className="h-[200px] max-w-[550px] rounded-md border p-4">
                    <div className="flex items-center">
                      <Avatar className="mr-[8px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-normal">ANONYMOUS</div>
                        <Rating
                          style={{
                            maxWidth: 180,
                            height: "20px",
                            width: "100px",
                          }}
                          value={review.overallStars}
                          itemStyles={{
                            itemShapes: ThinStar,
                            activeFillColor: "#f59e0b",
                            inactiveFillColor: "#ffedd5",
                          }}
                          readOnly
                        />
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <Badge className="m-2 bg-[#D1D1D1] text-black">
                      Recommend
                    </Badge>
                    <Badge className="m-2 bg-[#D1D1D1] text-black">
                      Recommend
                    </Badge>
                    <Badge className="m-2 bg-[#D1D1D1] text-black">
                      Recommend
                    </Badge>
                    <Badge className="m-2 bg-[#D1D1D1] text-black">
                      Recommend
                    </Badge>
                    <br />
                    <p className={`${poppins.className}`}>
                      {review.experience}
                    </p>
                  </ScrollArea>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </section>
  );
}
