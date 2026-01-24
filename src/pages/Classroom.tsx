import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Classroom = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">BoardPrep Classroom</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          An interactive classroom environment for collaborative learning and expert-led sessions.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Classroom;
