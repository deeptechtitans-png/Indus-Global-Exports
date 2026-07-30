interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '40+', label: 'Countries Served' },
  { value: '500+', label: 'Shipments Delivered' },
  { value: '120+', label: 'Global Buyers' },
  { value: '15+', label: 'Years in Trade' },
];

export default function StatsBand() {
  return (
    <div className="reveal grid gap-px overflow-hidden rounded-3xl bg-navy-100 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="bg-white px-6 py-10 text-center transition-colors hover:bg-navy-50/60"
        >
          <div className="font-display text-4xl font-extrabold text-navy-900 lg:text-5xl">
            {s.value}
          </div>
          <div className="mt-2 text-sm font-medium uppercase tracking-wider text-navy-500">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
