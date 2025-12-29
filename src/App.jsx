import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Awareness from "./components/Awareness";
import Quote from "./components/Quote";
import ContactForm from "./components/ContactForm";
import Impact from "./components/Impact";
import Mission from "./components/Mission";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission/>
      <Awareness />
      <Impact />
      <Quote />
      <ContactForm />
    </>
  );
}
