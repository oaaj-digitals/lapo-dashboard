import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export function QuickAccessCards() {
  const quickAccessItems = [
    {
      title: "Manage a Card",
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      href: "#",
    },
    {
      title: "Issue Instant Card",
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      href: "#",
    },
    {
      title: "Issue Personalized Card",
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      href: "#",
    },
    {
      title: "Review Card Requests",
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      href: "#",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] p-4 border-1 border-[#E2E2E2] rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickAccessItems.map((item, index) => (
          <Card key={index} className="hover:bg-accent/50 transition-colors px-2 py-2 bg-[#F1F7FF] border-1 shadow-2xs flex flex-row justify-start items-center">
            <CardContent className="px-0 flex ">
              <a href={item.href} className="flex items-center gap-2">
                <div className="flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-blue-100">{item.icon}</div>
                <span className="font-medium flex-1">{item.title}</span>
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
                  className="ml-auto h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
