import { DashboardCards } from "@/components/composed/DashboardCard";
import { Card } from "@/components/ui/card";
import { AttackTrends } from "@/components/visual/AttackTrends";
import { OwaspChart } from "@/components/visual/OwaspChart";
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
          title="Blocked"
          content="840"
          period="month"
          change={14}
        />

        <DashboardCards
          title="Requests"
          content="56"
          period="month"
          change={20}
        />
        <DashboardCards
          title="Requests"
          content="40"
          period="month"
          change={0}
        />
      </div>
      <div className="w-7/8 h-3/6 justify-between gap-2 pl-2 pr-2 flex flex-row ">
        <AttackTrends/>
        <OwaspChart />
      </div>
      <div className="w-7/8 h-2/6 justify-between gap-2 pl-2 pr-2 flex flex-row ">
        <Card className="h-full w-1/3"></Card>
        <Card className="h-full w-1/3"></Card>
        <Card className="h-full w-1/3"></Card>
      </div>
    </div>
  );
};
