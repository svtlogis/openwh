const metrics = [
  { label: "Total buyers", value: "24", note: "Demo data" },
  { label: "Total packages", value: "138", note: "Demo data" },
  { label: "Awaiting shipment", value: "17", note: "Demo data" },
  { label: "Unpaid fees", value: "$245.00", note: "Demo data" },
];

const packages = [
  { tracking: "DEMO-TRACK-001", buyer: "Alex Morgan", date: "Nov 14, 2026", status: "Arrived" },
  { tracking: "DEMO-TRACK-002", buyer: "Jamie Lee", date: "Nov 14, 2026", status: "Processing" },
  { tracking: "DEMO-TRACK-003", buyer: "Taylor Kim", date: "Nov 13, 2026", status: "Stored" },
];

export default function Home() {
  return (
    <main className="min-h-screen md:flex">
      <aside className="w-full border-b border-slate-200 bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <div className="text-xl font-bold text-[#2A6CD6]">OpenWH</div>
        <p className="mt-1 text-xs text-slate-500">Warehouse management</p>
        <nav className="mt-8 flex gap-2 overflow-x-auto md:flex-col">
          {["Dashboard", "Inventory", "Buyers", "Orders", "Payments", "Settings"].map((item, index) => (
            <div key={item} className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm ${index === 0 ? "bg-blue-50 font-semibold text-[#2A6CD6]" : "text-slate-600"}`}>
              {item}
            </div>
          ))}
        </nav>
        <p className="mt-8 hidden text-xs text-slate-400 md:block">Early development · v0.1.0</p>
      </aside>

      <section className="w-full p-5 md:p-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Overview</p>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Demo environment</span>
        </header>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="mt-3 text-3xl font-bold">{metric.value}</p>
              <p className="mt-2 text-xs text-slate-400">{metric.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-semibold">Recent incoming packages</h2>
              <span className="text-xs text-slate-400">Sample records</span>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="text-xs uppercase text-slate-400">
                  <tr><th className="pb-3">Tracking number</th><th className="pb-3">Buyer</th><th className="pb-3">Arrival date</th><th className="pb-3">Status</th></tr>
                </thead>
                <tbody>
                  {packages.map((item) => (
                    <tr key={item.tracking} className="border-t border-slate-100">
                      <td className="py-4 font-medium">{item.tracking}</td>
                      <td className="py-4">{item.buyer}</td>
                      <td className="py-4 text-slate-500">{item.date}</td>
                      <td className="py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">{item.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Storage overview</h2>
            <p className="mt-1 text-sm text-slate-500">Packages approaching their storage deadline</p>
            <div className="mt-5 space-y-4">
              {[{ name: "DEMO-TRACK-014", days: "5 days remaining" }, { name: "DEMO-TRACK-021", days: "8 days remaining" }, { name: "DEMO-TRACK-028", days: "10 days remaining" }].map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs text-amber-700">{item.days}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-400">
          OpenWH is an early-stage demo. All displayed records are fictional. Do not use this version for real warehouse operations.
        </p>
      </section>
    </main>
  );
}
