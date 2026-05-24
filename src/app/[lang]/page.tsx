import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navigation dictionary={dictionary} lang={lang} />
      <main id="main-content">
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Experience dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <Hackathons dictionary={dictionary} />
        <Skills dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
