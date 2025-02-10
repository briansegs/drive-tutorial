export default function HomePage(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-gray-100">
      <header className="mb-8">
        <h1 className="text-center text-4xl font-bold md:text-6xl">T3 Drive</h1>
      </header>
      <main className="max-w-2xl text-center">{props.children}</main>
      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} T3 Drive. All rights reserved.
      </footer>
    </div>
  );
}
