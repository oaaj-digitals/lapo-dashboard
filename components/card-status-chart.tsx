"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Active", value: 60, color: "#00A3B4" },
  { name: "Expired", value: 20, color: "#FFC107" },
  { name: "Inactive", value: 10, color: "#0D47A1" },
  { name: "Blocked", value: 5, color: "#9C27B0" },
  { name: "Lost", value: 5, color: "#F44336" },
]

export function CardStatusChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={0} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-4">
        <div className="text-sm text-muted-foreground">Total Cards</div>
        <div className="text-3xl font-bold">2,450</div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
