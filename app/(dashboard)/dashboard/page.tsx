"use client";

import { AnalyticsCards } from "@/components/analytics-cards";
import { CardStatusChart } from "@/components/card-status-chart";
import { MonthlyIssuanceChart } from "@/components/monthly-issuance-chart";
import { QuickAccessCards } from "@/components/quick-access-cards";
import { RecentCardRequests } from "@/components/recent-card-requests";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { WeeklyIncomeChart } from "@/components/weekly-income-chart";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="flex min-h-screen bg-background h-screen">
      <Sidebar active="dashboard" />
      <div className="flex-1 overflow-auto">
        <header className="border-b">
          <div className="flex h-16 items-center px-4 justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search" className="w-[250px] pl-8 rounded-full" />
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">Notifications</span>
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
                  className="h-5 w-5"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">User</span>
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
                  className="h-5 w-5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 bg-[#F1F7FF]">
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold">Hi Nazeer, what would you like to do today?</h2>
                  <p className="text-sm text-muted-foreground">Last login: 26/11/2024 14:39:58</p>
                </div>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Today</span>
                        <span className="text-xs text-muted-foreground">11 Nov 2024</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <QuickAccessCards />

            <div>
              <h2 className="text-xl font-semibold mb-4">Analytics</h2>
              <AnalyticsCards />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-2xs">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Monthly Issuance</h3>
                    <Button variant="ghost" size="icon">
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
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </Button>
                  </div>
                  <MonthlyIssuanceChart />
                </CardContent>
              </Card>

              <Card className="shadow-2xs">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Recent Card Requests</h3>
                    <Button variant="ghost" size="icon">
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
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </Button>
                  </div>
                  <RecentCardRequests />
                </CardContent>
              </Card>

              <Card className="shadow-2xs">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">This Week&apos;s Income</h3>
                    <Button variant="ghost" size="icon">
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
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </Button>
                  </div>
                  <WeeklyIncomeChart />
                </CardContent>
              </Card>

              <Card className="shadow-2xs">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Card Status Distribution</h3>
                  </div>
                  <CardStatusChart />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
