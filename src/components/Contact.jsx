import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Virhe lähetyksessä');
      setStatus('Kiitos! Otamme yhteyttä pian.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Lähetys epäonnistui. Yritä uudelleen.');
    }
  }

  return (
    <section id="yhteys" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Ota yhteyttä</h2>
            <p className="mt-3 text-slate-300">Jätä yhteystietosi, niin lähetämme hinnaston ja lisätiedot within 24h.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-400" /> B2B-tukkumyynti ja maahantuonti</li>
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-400" /> Toimitukset koko Suomeen</li>
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-400" /> Asiakastuki ark. 8–16</span></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Yritys</label>
                <input name="yritys" required className="w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 outline-none focus:ring-indigo-500/40" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Yhteyshenkilö</label>
                <input name="henkilo" required className="w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 outline-none focus:ring-indigo-500/40" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Sähköposti</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 outline-none focus:ring-indigo-500/40" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Viesti</label>
                <textarea name="viesti" rows="4" className="w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 outline-none focus:ring-indigo-500/40" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <button type="submit" className="rounded-xl bg-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:bg-indigo-600">Lähetä</button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
