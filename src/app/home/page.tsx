import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BiographySection } from "@/components/biography-section";
import { ContactSection } from "@/components/contact-section";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = { title: "ABOUT — Sara Barnthouse" };

export default function AboutPage() {
  return (
    <>
      <Header title={siteContent.name.toUpperCase()} socialLinks={siteContent.socialLinks} />
      <main id="page">
        <BiographySection introduction={siteContent.introduction} biography={siteContent.biography} image={siteContent.images.portrait} imageAlt="Sara Barnthouse relaxing in a bathtub, wearing sunglasses and a white blouse" />
        <ContactSection title="Get In Touch." image={siteContent.images.contact} details={siteContent.contactDetails} />
      </main>
    </>
  );
}
