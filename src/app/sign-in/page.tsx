/* eslint-disable @typescript-eslint/await-thenable */
import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-gray-100">
      <main className="max-w-2xl text-center">
        <SignInButton forceRedirectUrl={"/drive"} />
      </main>
      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} T3 Drive. All rights reserved.
      </footer>
    </div>
  );
}
