
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[40%_60%] gap-4 h-screen">
      <header className="bg-yellow-500 p-6 text-center text-xl font-bold col-span-2">
        Header
      </header>

      <aside className="bg-blue-500 text-white p-10">
        Sidebar
      </aside>

      <div className="grid grid-rows-[auto_auto] gap-4 p-6">
        <div className="p-4 border border-gray-300">Content 1</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300">Content 2</div>
          <div className="p-4 border border-gray-300">Content 3</div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-6 text-center col-span-2">
        Footer
      </footer>
    </div>
  );
}
