import { CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickAccessItems.map((item, index) => (
          <Card key={index} className="hover:bg-accent/50 transition-colors">
            <CardContent className="p-4">
              <a href={item.href} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">{item.icon}</div>
                <span className="font-medium">{item.title}</span>
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
  )
}
