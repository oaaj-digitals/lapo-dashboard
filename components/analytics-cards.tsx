import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon } from "lucide-react";
import type React from "react";

export function AnalyticsCards() {
  const analyticsData = [
    {
      title: "Total Active Cards",
      value: "26,478",
      change: "+9%",
      period: "this month",
      icon: <CreditCardIcon className="h-5 w-5 text-green-500" />,
      changeColor: "text-green-500",
    },
    {
      title: "Total Personalized Cards",
      value: "15,703",
      change: "8.5%",
      period: "this month",
      icon: <CreditCardIcon className="h-5 w-5 text-purple-500" />,
      changeColor: "text-green-500",
    },
    {
      title: "Today's Revenue",
      value: "₦9.3M",
      change: "+6%",
      period: "vs yesterday",
      icon: <ChartIcon className="h-5 w-5 text-blue-500" />,
      changeColor: "text-green-500",
    },
    {
      title: "Pending Requests",
      value: "38",
      change: "Requires attention",
      period: "",
      icon: <AlertIcon className="h-5 w-5 text-amber-500" />,
      changeColor: "text-amber-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {analyticsData.map((item, index) => (
        <Card key={index} className="shadow-2xs">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              {item.icon}
              <span className="text-sm text-muted-foreground">{item.title}</span>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="flex items-center gap-1">
                {item.title !== "Pending Requests" && <ArrowUpIcon className={`h-4 w-4 ${item.changeColor}`} />}
                <span className={`text-sm ${item.changeColor}`}>{item.change}</span>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  );
}
