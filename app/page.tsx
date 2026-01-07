import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import ProcessSection from "./_components/ProcessSection";
import MissionVisionValues from "./_components/MissionVisionValues";
import FounderMessage from "./_components/FounderMessage";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <MissionVisionValues />
      <FounderMessage />
      <Footer />
    </main>
  );
}
