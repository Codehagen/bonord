import { SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Bonor",
  description:
    "Propwrite revolutionizes real estate listings with AI-driven efficiency. Streamline your workflow with intuitive tools and seamless integrations. Propwrite is tailored for the modern real estate professional who values precision, security, and scalability.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/codehagen",
    github: "https://github.com/meglerhagen",
  },
  mailSupport: "christer@sailsdock.com",
};
