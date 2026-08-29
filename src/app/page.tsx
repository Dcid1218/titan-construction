import { CredentialsBar } from "@/components/CredentialsBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Guarantee } from "@/components/Guarantee";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { SocialProof } from "@/components/SocialProof";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WhyTitan } from "@/components/WhyTitan";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredentialsBar />
        <Services />
        <WhyTitan />
        <Guarantee />
        <FAQ />
        <Gallery />
        <SocialProof />
        <ServiceArea />
        <LeadForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
