import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";
import SessionContent from "@/components/SessionContent";
import Speaker from "@/components/Speaker";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RegistrationForm />
        <SessionContent />
        <Speaker />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
