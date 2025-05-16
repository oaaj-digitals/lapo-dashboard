"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { month: "May", personalized: 25, instant: 45 },
  { month: "Jun", personalized: 35, instant: 65 },
  { month: "Jul", personalized: 15, instant: 30 },
  { month: "Aug", personalized: 25, instant: 50 },
  { month: "Sep", personalized: 30, instant: 40 },
  { month: "Oct", personalized: 40, instant: 60 },
  { month: "Nov", personalized: 30, instant: 50 },
];

export function MonthlyIssuanceChart() {
  return (
    <ChartContainer
      config={{
        personalized: {
          label: "Personalized",
          color: "hsl(240, 100%, 50%)",
        },
        instant: {
          label: "Instant",
          color: "hsl(210, 100%, 85%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="personalized" stackId={'total'} fill="var(--color-personalized)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="instant" stackId={'total'} fill="var(--color-instant)" radius={[4, 4, 0, 0]} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => {
              return <span className="text-sm">{value}</span>;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
