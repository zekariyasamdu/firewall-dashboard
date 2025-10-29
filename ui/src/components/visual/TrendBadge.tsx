import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";

function TrendBadge({ className, change }: { change: number, className?: string }) {
  const changeType =
    change > 0 ? "increase" : change < 0 ? "decrease" : "no-change";

  const badgeText =
    changeType === "increase"
      ? ` +${change.toFixed(1)}%`
      : changeType === "decrease"
      ? ` ${change.toFixed(1)}%`
      : ` 0%`;

  function directionIcon(change:number){
    if(change === 0) return '→'
    if(change > 0) return <TrendingUp className="h-4 w-4" />
    return <TrendingDown className="h-4 w-4" />
  }

  return (
    <Badge 
      variant="secondary"
      className={cn(
        "text-xs",
        className,
        changeType === "increase" &&
          "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
        changeType === "decrease" &&
          "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
        changeType === "no-change" &&
          "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
      )}
    >
      {directionIcon(change)} {badgeText}
    </Badge>
  );
}

export default TrendBadge;