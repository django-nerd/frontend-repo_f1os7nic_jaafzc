import { Menu, Wrench } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#palvelut", label: "Palvelut" },
    { href: "#valikoima", label: "Valikoima" },
    { href: "#brändit", label: "Brändit" },
    { href: "#yhteys", label: "Yhteys" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg shadow-blue-500/20">
            <Wrench size={18} />
          </span>
          <span className="text-xl font-semibold tracking-tight">toolcat</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#yhteys" className="inline-flex items-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10">
            Ota yhteyttä
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-slate-200 ring-1 ring-white/10" onClick={() => setOpen(!open)} aria-label="Avaa valikko">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#yhteys" className="block rounded-md px-3 py-2 text-white bg-white/10 ring-1 ring-white/10" onClick={() => setOpen(false)}>
              Ota yhteyttä
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
