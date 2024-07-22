export default function Page() {
  return (
    <main>
      <div className="relative w-48 h-64 bg-sky-300 p-4">
        <p>Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-sky-500 m-4 p-1 rounded-xl">
          <p>Absolute child</p>
        </div>
      </div>
    </main>
  )
}