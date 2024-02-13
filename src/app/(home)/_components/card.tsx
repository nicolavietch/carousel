import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ImageCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Some title</CardTitle>
        <CardDescription>Some description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>imagen</p>
      </CardContent>
      <CardFooter>
        <p>some footer</p>
      </CardFooter>
    </Card>
  );
};
