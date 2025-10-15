import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

function TrendBadge({ className, change }: { change: number, className: string }) {
  const changeType =
    change > 0 ? "increase" : change < 0 ? "decrease" : "no-change";

  const badgeText =
    changeType === "increase"
      ? `↗ +${change.toFixed(1)}%`
      : changeType === "decrease"
      ? `↘ ${change.toFixed(1)}%`
      : `→ 0%`;

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
      {badgeText}
    </Badge>
  );
}

export default TrendBadge;