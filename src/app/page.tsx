import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import ZennArticles from "@/components/ZennArticles";
import Works from "@/components/Works";
import Tools from "@/components/Tools";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Process />
      <Timeline />
      <Skills />
      <ZennArticles />
      <Tools />
      <Services />
      <ContactForm />
      <Footer />
      <ChatBot />
    </>
  );
}
