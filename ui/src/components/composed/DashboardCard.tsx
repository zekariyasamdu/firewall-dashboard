import { cn } from "@/lib/utils";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import TrendBadge from "../visual/TrendBadge";

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
    <Card className={cn("h-full w-1/4 relative pl-6", className)} {...props}>
      <TrendBadge className="absolute right-2 top-2" change={change} />
      <CardTitle className="text-muted-foreground">{title}</CardTitle>
      <CardContent className="font-bold text-3xl p-0">{content}</CardContent>
      <CardDescription className="text-muted-foreground ">
        Trending {change > 0 ? "up" : "down"} this {period}
      </CardDescription>
    </Card>
  );
};
