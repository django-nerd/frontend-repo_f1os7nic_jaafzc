import { ArrowRight, Shield, Globe2, PackageCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(37,99,235,0.25),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-300 ring-1 ring-indigo-500/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Tukkukauppa ja maahantuonti vuodesta 2009
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Käsityökalujen luotettava kumppani Suomessa
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Toolcat toimittaa laadukkaita käsityökaluja jälleenmyyjille, teollisuudelle ja
              julkiselle sektorille. Nopea saatavuus, kilpailukykyiset hinnat ja vahvat brändit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#yhteys" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:bg-indigo-600">
                Pyydä tarjous
                <ArrowRight size={18} />
              </a>
              <a href="#valikoima" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-white font-medium ring-1 ring-white/10 hover:bg-white/10">
                Tutustu valikoimaan
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Shield className="text-indigo-400" />
                <div>
                  <dt className="font-semibold text-white">Laatu ja takuu</dt>
                  <dd>Testatut tuotteet ja selkeät takuukäytännöt</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="text-indigo-400" />
                <div>
                  <dt className="font-semibold text-white">Maahantuonti</dt>
                  <dd>Suorat suhteet tehtaisiin Euroopassa ja Aasiassa</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck className="text-indigo-400" />
                <div>
                  <dt className="font-semibold text-white">Nopeat toimitukset</dt>
                  <dd>Laaja varasto ja tehokas logistiikka</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-3">
                {["Hylsyt", "Meisselit", "Avaimet", "Pihdit", "Leikkurit", "Vääntimet", "Momentti", "Taltat", "Sahat"].map((tag) => (
                  <div key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-slate-200">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 ring-1 ring-white/10">
                <p className="text-slate-300">
                  "Toolcat on ollut meille luotettava kumppani: toimitusvarma, joustava ja kilpailukykyinen."
                </p>
                <p className="mt-3 text-sm text-slate-400">– Asiakaspalaute, teollisuusasiakas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
