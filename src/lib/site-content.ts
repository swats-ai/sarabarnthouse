import hero from "../../public/images/hero.webp";
import contact from "../../public/images/contact.webp";
import portrait from "../../public/images/portrait.webp";

export const siteContent = {
  name: "Sara Barnthouse",
  landingTitle: " Sara Barnthouse | Agent",
  introduction: "A dynamic and authentic mom. Friend. Daughter and talent representative based in Los Angeles, known for her friendly demeanor and keen industry insights.",
  biography: "As the owner of DeVine Reps, she specializes in connecting creative talent with opportunities in the entertainment industry. Sara’s reputation for honesty and enthusiasm has made her a trusted partner for many clients, including notable projects with clients such as Lexus, Beats by Dre, Burger King, Nike and mane more. With a commitment to detail and a passion for fostering artistic innovation and boosting the up and coming, Sara continues to play a vital role in shaping the production landscape both on the east and west coast.",
  images: { hero, contact, portrait },
  socialLinks: [
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sarabarnthouse/" },
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/bhousedevine/" },
  ],
  contactDetails: [
    { label: "Hours", lines: ["Monday–Friday", "9am–4pm"] },
    { label: "Phone", lines: ["(310) 384-3037"], href: "tel:3103843037" },
    { label: "Email", lines: ["sara@devinereps.com"], href: "mailto:sara@devinereps.com?" },
  ],
} as const;
