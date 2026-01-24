import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IOS = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">iOS App</h1>
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">Coming Soon</span>
        <p className="text-xl text-muted-foreground max-w-2xl">
          The BoardPrep iOS version is currently in development. Stay tuned for a seamless native experience on your iPhone and iPad.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default IOS;
