import type { SVGProps } from "react";

export type SocialPlatform = "linkedin" | "instagram";

export function SocialIcon({ platform, ...props }: SVGProps<SVGSVGElement> & { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="6" cy="5.6" r="1.7" />
      <path d="M4.5 9h3v11h-3zM10 9h2.9v1.5c.6-1.1 1.7-1.8 3.2-1.8 3 0 3.9 1.9 3.9 4.8V20h-3v-5.8c0-1.6-.2-2.8-1.8-2.8-1.7 0-2.2 1.1-2.2 2.8V20h-3z" />
    </svg>
  );
}
