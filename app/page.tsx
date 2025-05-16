'use client';

import img3 from "@/assets/imgs/image 3.png";
import img5 from "@/assets/imgs/image 5.png";
import logo from "@/assets/imgs/logo.svg";
import { Button } from "@/components/ui/button";
import { Eye, Lock, User } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  redirect('/dashboard');
};

export default function Home() {
  return (
    <div className="flex min-h-screen max-h-fit p-4">
      {/* Left side - Login Form */}
      <div className=" w-1/2 flex-1 flex flex-col justify-between px-12 py-10 overflow-x-auto">
        <div className="flex flex-col gap-8">
          <div >
            <Image
              src={logo}
              alt="LAPO Logo"
              width={125}
              height={40}
              className="h-auto"
            />
          </div>

          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-2">Hi, Welcome Back!</h1>
            <p className="text-gray-600 mb-8">
              Please sign in using your credentials.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block font-medium"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <Eye className="h-5 w-5 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="text-gray-600 hover:text-blue-600 text-sm">
                  Forgot password
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              <Button type="submit" className="cursor-pointer w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md">
                Login
              </Button>
            </form>
          </div>

        </div>

        <div className="text-gray-500 text-sm">
          &copy; 2024 Mercator Technologies Ltd. All rights reserved.
        </div>
      </div>

      {/* Right side - Dashboard Preview */}
      <div className=" w-1/2 flex-1 bg-blue-50 pt-[7rem] relative overflow-hidden">
        <div className="absolute -top-0 -left-0 -translate-1/2 w-36 h-36 border-[1.5rem] border-blue-700 rounded-full px-12 " />

        <div className=" h-full relative z-10 max-w-full mx-auto flex flex-col gap-8 px-12">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl font-bold ">
              The simplest way to manage your cards
            </h2>
            <p className="text-gray-600 ">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="w-full h-full">
            <Image
              src={img5}
              alt={""}
              className="h-full w-auto object-cover relative left-1/8 mt-8"
            />



            <Image
              src={img3}
              alt={""}
              className="absolute h-auto w-1/3 top-1/2 "
            />
          </div>

        </div>

        <div
          className=" z-30 w-full h-1/3 absolute bottom-0 bg-gradient-to-t from-[#F4F9FF] via-[#f4f9ffe8] to-[#f4f9ff0e]"
        />
      </div>
    </div>
  );
}
