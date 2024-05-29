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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { poppins } from "@/fonts";
export default function ReviewCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <Card className="max-w-[600px] mx-auto mt-12 min-h-[500px]">
      <CardHeader>
        <CardTitle className="text-center">Overall Rating</CardTitle>
        <CardDescription className="text-center text-[36px]">
          4.5
          <Rating
            className="mx-auto"
            style={{ maxWidth: 180 }}
            value={4.5}
            readOnly
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          Excellent
          <Progress className="ml-4 [&>*]:bg-[#315196]" value={33} />
        </div>
        <div className="flex justify-between items-center">
          Excellent
          <Progress className="ml-4 [&>*]:bg-[#315196]" value={50} />
        </div>
        <div className="flex justify-between items-center">
          Excellent
          <Progress className="ml-4 [&>*]:bg-[#315196]" value={60} />
        </div>
        <div className="flex justify-between items-center">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <ScrollArea className="h-[200px] max-w-[550px] rounded-md border p-4">
                  <div className="flex items-center">
                    <Avatar className="mr-[6px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="font-normal">ANONYMOUS</div>
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
                    Jokester began sneaking into the castle in the middle of the
                    night and leaving jokes all over the place: under the king's
                    pillow, in his soup, even in the royal toilet. The king was
                    furious, but he couldn't seem to stop Jokester. And then,
                    one day, the people of the kingdom discovered that the jokes
                    left by Jokester were so funny that they couldn't help but
                    laugh. And once they started laughing, they couldn't stop.
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
  );
}
