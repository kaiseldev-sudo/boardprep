import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lite = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">BoardPrep Lite</h1>
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">Coming Soon</span>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A lighter version of BoardPrep designed for quick review and essential study sessions on the go.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Lite;
