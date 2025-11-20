export default function Brands() {
  const brands = ["ProTorque", "HexaPro", "NordCut", "FlexDrive", "Impacto", "ViseMax", "Cutline"];

  return (
    <section id="brändit" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Brändit</h2>
        <p className="mt-3 text-slate-300">Teemme yhteistyötä valikoitujen, laadukkaiden valmistajien kanssa.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {brands.map((b) => (
            <div key={b} className="flex items-center justify-center rounded-xl bg-white/5 py-6 text-slate-300 ring-1 ring-white/10">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
