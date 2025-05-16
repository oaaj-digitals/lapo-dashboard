"use client";

import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  List,
  LogOut,
  Package,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import cardInfraLogo from "@/assets/imgs/cardinfra.svg";
import logo from "@/assets/imgs/logo.svg";
import Image from "next/image";

import styles from "@/assets/styles/sidebar.module.css";

interface Props {
  active?: string;
}

export function Sidebar({ active }: Props) {
  const selected = active;

  return (
    <div className="h-screen hidden border-r bg-[#e6f0fa] md:block md:w-64">
      <div className="flex h-full flex-col pt-4 gap-4">
        <div className="flex h-14 items-center border-b px-4 ">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold w-full justify-center"
          >
            <Image
              src={logo}
              alt="LAPO Logo"
              className="h-auto w-[70%]"
            />
          </Link>
        </div>

        <h2 className="px-4 text-xs font-semibold tracking-tight text-muted-foreground">
          MAIN MENU
        </h2>

        <div className={`flex-1 overflow-y-auto ${styles.navList}`}>
          <nav className="grid gap-1 px-2 py-4">
            <Button
              variant={selected === "dashboard" ? "secondary" : "ghost"}
              className={cn(
                "flex w-full items-center justify-start gap-2",
                selected === "dashboard" && "bg-accent"
              )}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Branches
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <Settings className="h-4 w-4" />
              Roles
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <Users className="h-4 w-4" />
              Users
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <FileText className="h-4 w-4" />
              Card Scheme
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <CreditCard className="h-4 w-4" />
              Card Profile
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <FileText className="h-4 w-4" />
              Card Request
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <Package className="h-4 w-4" />
              Stock
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <CreditCard className="h-4 w-4" />
              Cards
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <List className="h-4 w-4" />
              Authorization List
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <List className="h-4 w-4" />
              Authorization Queue
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <FileText className="h-4 w-4" />
              Trail
            </Button>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-2"
            >
              <User className="h-4 w-4" />
              Account
            </Button>
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground mb-2 w-full">POWERED BY</div>
            <div className="flex gap-2 w-full">
              <Image src={cardInfraLogo} alt={""} className="self-center w-auto h-9 mt-1" />
            </div>
            <Button
              variant="ghost"
              className="mt-4 flex items-center justify-start gap-2 text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
