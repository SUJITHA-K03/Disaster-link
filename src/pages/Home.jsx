export default function Home() {
  return (
    <div className="text-center">
      <img src="/banner.svg" alt="banner" className="mx-auto rounded-lg shadow-md w-full max-w-4xl" />
      <h2 className="text-3xl font-bold mt-6">Community-first emergency reporting</h2>
      <p className="mt-3 text-lg text-gray-700">Empowering people to report disasters quickly and connect volunteers effectively.</p>
      <div className="mt-6">
        <a href="/report" className="inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">Report an Incident</a>
      </div>
    </div>
  )
}
