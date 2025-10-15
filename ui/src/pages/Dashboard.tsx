import { DashboardCards } from "@/components/composed/DashboardCard";
import {
  Card,
} from "@/components/ui/card";
export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 w-full h-full items-center p-10">
      <div className="w-7/8 h-1/5 justify-between gap-2 pl-2 pr-2 flex flex-row">
        <DashboardCards
          title="Requests"
          content="1040"
          period="month"
          change={-20}
        />
        <DashboardCards
          title="Requests"
          content="1040"
          period="month"
          change={20}
        />

        <DashboardCards
          title="Requests"
          content="1040"
          period="month"
          change={20}
        />
        <DashboardCards
          title="Requests"
          content="1040"
          period="month"
          change={20}
        />
      </div>
      <div className="w-7/8 h-3/6 justify-between gap-2 pl-2 pr-2 flex flex-row ">
        <Card className="h-full w-3/4"></Card>
        <Card className="h-full w-1/4"></Card>
      </div>
      <div className="w-7/8 h-2/6 justify-between gap-2 pl-2 pr-2 flex flex-row ">
        <Card className="h-full w-1/3"></Card>
        <Card className="h-full w-1/3"></Card>
        <Card className="h-full w-1/3"></Card>
      </div>
    </div>
  );
};
