"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", income: 40 },
  { day: "Tue", income: 30 },
  { day: "Wed", income: 20 },
  { day: "Thu", income: 50 },
  { day: "Fri", income: 35 },
  { day: "Sat", income: 25 },
  { day: "Sun", income: 70 },
]

export function WeeklyIncomeChart() {
  return (
    <ChartContainer
      config={{
        income: {
          label: "Income",
          color: "hsl(142, 76%, 36%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }} />
          <YAxis axisLine={false} tickLine={false} domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="var(--color-income)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
