import { ImageItem } from "@/app/(home)/_components/images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const ImageCard = ({ name, description, src }: ImageItem) => {
  return (
    <Card className="min-w-[15rem]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-[14rem] h-[14rem] relative flex">
          <Image src={src} alt={name} fill />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <h3>{description}</h3>
        <br />
        <p>{name}</p>
      </CardFooter>
    </Card>
  );
};
