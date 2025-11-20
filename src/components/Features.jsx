import { Factory, Handshake, PiggyBank, Truck, ShieldCheck, Wrench } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Factory className="text-indigo-400" />,
      title: "Suorat tehtaidensuhteet",
      desc: "Hankimme tuotteet suoraan valmistajilta – parempi hinta, varmempi laatu.",
    },
    {
      icon: <Handshake className="text-indigo-400" />,
      title: "Kumppanuusajattelu",
      desc: "Autamme jälleenmyyjiä kasvamaan – koulutus, esillepanot ja markkinointimateriaali.",
    },
    {
      icon: <PiggyBank className="text-indigo-400" />,
      title: "Kilpailukykyinen hinnoittelu",
      desc: "Suuri ostovolyymi ja kustannustehokas logistiikka takaavat hyvän katteen.",
    },
    {
      icon: <Truck className="text-indigo-400" />,
      title: "Nopeat toimitukset",
      desc: "Laaja varasto Suomessa ja selkeä toimitusrytmi.",
    },
    {
      icon: <ShieldCheck className="text-indigo-400" />,
      title: "Tuki ja takuu",
      desc: "Tekninen tuki, varaosat ja sujuva takuuprosessi.",
    },
    {
      icon: <Wrench className="text-indigo-400" />,
      title: "Laaja valikoima",
      desc: "Käsityökalut, momenttityökalut, sähkötyökalutarvikkeet ja paljon muuta.",
    },
  ];

  return (
    <section id="palvelut" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Miksi Toolcat?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Rakennamme pitkäaikaisia suhteita ja varmistamme, että jälleenmyyjäsi menestyvät.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
