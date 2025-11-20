export default function Catalog() {
  const categories = [
    {
      name: "Käsityökalut",
      items: ["Hylsysarjat", "Momenttiavaimet", "Pihdit", "Talttasarjat"],
    },
    {
      name: "Sähkötyökalutarvikkeet",
      items: ["Terät", "Holkit", "Hiomatuotteet", "Kärjet"],
    },
    {
      name: "Työpajaratkaisut",
      items: ["Työkalukärryt", "Vaunut", "Säilytys", "Moduulit"],
    },
  ];

  return (
    <section id="valikoima" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Valikoima</h2>
            <p className="mt-3 text-slate-300">Laaja ja jatkuvasti kehittyvä tuotevalikoima eri käyttötarpeisiin.</p>
          </div>
          <a href="#yhteys" className="hidden sm:inline-flex rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10">Kysy tukkuhinnastoa</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                {cat.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
