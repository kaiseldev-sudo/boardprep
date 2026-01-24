import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileAppSection from "@/components/MobileAppSection";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-12">
         {/* Reuse existing MobileAppSection if appropriate, or create specific content */}
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
};

export default MobileApp;
