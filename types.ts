import { LucideIcon } from "lucide-react";

export interface Feature {
  label: string;
  detail?: string;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  themeColor: string; // Tailwind class safe color name
  icon: LucideIcon;
  imageUrl: string;
  status: 'LIVE' | 'BETA' | 'COMING SOON' | 'IN DEVELOPMENT';
  badge?: string;
}