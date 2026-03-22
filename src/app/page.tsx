import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
      <Works />
      <Services />
      <ContactForm />
      <Footer />
      <ChatBot />
    </>
  );
}
