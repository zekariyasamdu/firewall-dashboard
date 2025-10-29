import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", XXS: 222, "SQL injections": 150 },
  { date: "2024-04-02", XXS: 97, "SQL injections": 180 },
  { date: "2024-04-03", XXS: 167, "SQL injections": 120 },
  { date: "2024-04-04", XXS: 242, "SQL injections": 260 },
  { date: "2024-04-05", XXS: 373, "SQL injections": 290 },
  { date: "2024-04-06", XXS: 301, "SQL injections": 340 },
  { date: "2024-04-07", XXS: 245, "SQL injections": 180 },
  { date: "2024-04-08", XXS: 409, "SQL injections": 320 },
  { date: "2024-04-09", XXS: 59, "SQL injections": 110 },
  { date: "2024-04-10", XXS: 261, "SQL injections": 190 },
  { date: "2024-04-11", XXS: 327, "SQL injections": 350 },
  { date: "2024-04-12", XXS: 292, "SQL injections": 210 },
  { date: "2024-04-13", XXS: 342, "SQL injections": 380 },
  { date: "2024-04-14", XXS: 137, "SQL injections": 220 },
  { date: "2024-04-15", XXS: 120, "SQL injections": 170 },
  { date: "2024-04-16", XXS: 138, "SQL injections": 190 },
  { date: "2024-04-17", XXS: 446, "SQL injections": 360 },
  { date: "2024-04-18", XXS: 364, "SQL injections": 410 },
  { date: "2024-04-19", XXS: 243, "SQL injections": 180 },
  { date: "2024-04-20", XXS: 89, "SQL injections": 150 },
  { date: "2024-04-21", XXS: 137, "SQL injections": 200 },
  { date: "2024-04-22", XXS: 224, "SQL injections": 170 },
  { date: "2024-04-23", XXS: 138, "SQL injections": 230 },
  { date: "2024-04-24", XXS: 387, "SQL injections": 290 },
  { date: "2024-04-25", XXS: 215, "SQL injections": 250 },
  { date: "2024-04-26", XXS: 75, "SQL injections": 130 },
  { date: "2024-04-27", XXS: 383, "SQL injections": 420 },
  { date: "2024-04-28", XXS: 122, "SQL injections": 180 },
  { date: "2024-04-29", XXS: 315, "SQL injections": 240 },
  { date: "2024-04-30", XXS: 454, "SQL injections": 380 },
  { date: "2024-05-01", XXS: 165, "SQL injections": 220 },
  { date: "2024-05-02", XXS: 293, "SQL injections": 310 },
  { date: "2024-05-03", XXS: 247, "SQL injections": 190 },
  { date: "2024-05-04", XXS: 385, "SQL injections": 420 },
  { date: "2024-05-05", XXS: 481, "SQL injections": 390 },
  { date: "2024-05-06", XXS: 498, "SQL injections": 520 },
  { date: "2024-05-07", XXS: 388, "SQL injections": 300 },
  { date: "2024-05-08", XXS: 149, "SQL injections": 210 },
  { date: "2024-05-09", XXS: 227, "SQL injections": 180 },
  { date: "2024-05-10", XXS: 293, "SQL injections": 330 },
  { date: "2024-05-11", XXS: 335, "SQL injections": 270 },
  { date: "2024-05-12", XXS: 197, "SQL injections": 240 },
  { date: "2024-05-13", XXS: 197, "SQL injections": 160 },
  { date: "2024-05-14", XXS: 448, "SQL injections": 490 },
  { date: "2024-05-15", XXS: 473, "SQL injections": 380 },
  { date: "2024-05-16", XXS: 338, "SQL injections": 400 },
  { date: "2024-05-17", XXS: 499, "SQL injections": 420 },
  { date: "2024-05-18", XXS: 315, "SQL injections": 350 },
  { date: "2024-05-19", XXS: 235, "SQL injections": 180 },
  { date: "2024-05-20", XXS: 177, "SQL injections": 230 },
  { date: "2024-05-21", XXS: 82, "SQL injections": 140 },
  { date: "2024-05-22", XXS: 81, "SQL injections": 120 },
  { date: "2024-05-23", XXS: 252, "SQL injections": 290 },
  { date: "2024-05-24", XXS: 294, "SQL injections": 220 },
  { date: "2024-05-25", XXS: 201, "SQL injections": 250 },
  { date: "2024-05-26", XXS: 213, "SQL injections": 170 },
  { date: "2024-05-27", XXS: 420, "SQL injections": 460 },
  { date: "2024-05-28", XXS: 233, "SQL injections": 190 },
  { date: "2024-05-29", XXS: 78, "SQL injections": 130 },
  { date: "2024-05-30", XXS: 340, "SQL injections": 280 },
  { date: "2024-05-31", XXS: 178, "SQL injections": 230 },
  { date: "2024-06-01", XXS: 178, "SQL injections": 200 },
  { date: "2024-06-02", XXS: 470, "SQL injections": 410 },
  { date: "2024-06-03", XXS: 103, "SQL injections": 160 },
  { date: "2024-06-04", XXS: 439, "SQL injections": 380 },
  { date: "2024-06-05", XXS: 88, "SQL injections": 140 },
  { date: "2024-06-06", XXS: 294, "SQL injections": 250 },
  { date: "2024-06-07", XXS: 323, "SQL injections": 370 },
  { date: "2024-06-08", XXS: 385, "SQL injections": 320 },
  { date: "2024-06-09", XXS: 438, "SQL injections": 480 },
  { date: "2024-06-10", XXS: 155, "SQL injections": 200 },
  { date: "2024-06-11", XXS: 92, "SQL injections": 150 },
  { date: "2024-06-12", XXS: 492, "SQL injections": 420 },
  { date: "2024-06-13", XXS: 81, "SQL injections": 130 },
  { date: "2024-06-14", XXS: 426, "SQL injections": 380 },
  { date: "2024-06-15", XXS: 307, "SQL injections": 350 },
  { date: "2024-06-16", XXS: 371, "SQL injections": 310 },
  { date: "2024-06-17", XXS: 475, "SQL injections": 520 },
  { date: "2024-06-18", XXS: 107, "SQL injections": 170 },
  { date: "2024-06-19", XXS: 341, "SQL injections": 290 },
  { date: "2024-06-20", XXS: 408, "SQL injections": 450 },
  { date: "2024-06-21", XXS: 169, "SQL injections": 210 },
  { date: "2024-06-22", XXS: 317, "SQL injections": 270 },
  { date: "2024-06-23", XXS: 480, "SQL injections": 530 },
  { date: "2024-06-24", XXS: 132, "SQL injections": 180 },
  { date: "2024-06-25", XXS: 141, "SQL injections": 190 },
  { date: "2024-06-26", XXS: 434, "SQL injections": 380 },
  { date: "2024-06-27", XXS: 448, "SQL injections": 490 },
  { date: "2024-06-28", XXS: 149, "SQL injections": 200 },
  { date: "2024-06-29", XXS: 103, "SQL injections": 160 },
  { date: "2024-06-30", XXS: 446, "SQL injections": 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  XXS: {
    label: "XSS",
    color: "var(--chart-1)",
  },
  SQL: {
    label: "SQL",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AttackTrends() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0 h-full w-3/4">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Attack Trends</CardTitle>
          <CardDescription>
            Showing total attacks for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="XXS"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--chart-1)"
              stackId="a"
            />
            <Area
              dataKey="SQL injections"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-2)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
