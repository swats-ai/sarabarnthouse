import { LandingHero } from "@/components/landing-hero";
import { siteContent } from "@/lib/site-content";

export default function LandingPage() {
  return <main><LandingHero title={siteContent.landingTitle} image={siteContent.images.hero} href="/home" linkLabel="(ENTER)" /></main>;
}
