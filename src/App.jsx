import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Catalog from "./components/Catalog";
import Brands from "./components/Brands";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <Brands />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} toolcat – Käsityökalujen tukkukauppa ja maahantuonti</p>
          <div className="text-sm text-slate-400">Y-tunnus 1234567-8 • Helsinki, Suomi</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
