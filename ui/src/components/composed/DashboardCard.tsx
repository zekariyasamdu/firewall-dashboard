import { cn } from "@/lib/utils";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import TrendBadge from "./TrendBadge";

type TDashboardCards = {
  title: string;
  content: string;
  change: number;
  period: "24 hour" | "month" | "year" | "6 month";
  className?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export const DashboardCards = ({
  title,
  period,
  content,
  change,
  className,
  ...props
}: TDashboardCards) => {
  return (
    <Card className={cn("h-full w-1/4 relative", className)} {...props}>
      <TrendBadge className="absolute right-2 top-2" change={change} />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <CardDescription>
        Trending {change > 0 ? "up" : "down"} this {period}
      </CardDescription>
      <CardFooter>{period}</CardFooter>
    </Card>
  );
};
