/* eslint-disable @typescript-eslint/await-thenable */
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold md:text-6xl">T3 Drive</h1>

      <p className="mb-8 text-xl text-gray-300 md:text-2xl">
        Secure, fast, and easy-to-use cloud storage for all your files.
      </p>
      <form
        action={async () => {
          "use server";

          const session = await auth();

          if (!session.userId) {
            return redirect("/sign-in");
          }

          return redirect("/drive");
        }}
      >
        <Button
          size="lg"
          type="submit"
          className="bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-black"
        >
          Get Started
        </Button>
      </form>
      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} T3 Drive. All rights reserved.
      </footer>
    </>
  );
}
