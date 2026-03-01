"use client";

import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/ui/logout-button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: session } = authClient.useSession();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="space-y-5">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h5 className="text-xl">
            {session && `Welcome, ${session.user.name}`}
          </h5>
          <h1 className="text-4xl font-bold">Better Auth Starter Template</h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            This is a starter template for Better Auth. It includes a simple
            login and signup page. You can use this template as a starting point
            for your own projects.
          </h2>
        </div>

        {session ? (
          <LogoutButton />
        ) : (
          <div>
            <Button asChild>
              <Link href="/login" className="mr-4 text-blue-500">
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup" className="text-blue-500">
                Signup
              </Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
