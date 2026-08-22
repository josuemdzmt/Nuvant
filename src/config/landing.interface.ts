export interface LandingPageData {
  meta: Meta;
  headerData: HeaderData;
  heroData: HeroData;
  servicesData: ServicesData;
  adventajesData: AdventajesData;
  brandsData: BrandsData;
  casesData: CasesData;
  trustData: TrustData;
  contactData: ContactData;
  footerData: FooterData;
}

export interface ContactData {
  title: string;
  description: string;
  location: string;
  email: string;
  emailHref: string;
  cta: string;
  ctaHref: string;
}

export interface HeaderData {
  logo: string;
  logoImg: string;
  links: Link[];
}

export interface HeroData {
  title: string;
  subTitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  highlightedTitle: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface AdventajesData {
  title: string;
  adventajes: Adventaje[];
}

export interface Adventaje {
  title: string;
  description: string;
  img?: string;
  imageAlt?: string;
  checks: string[];
}

export interface FooterData {
  logo: string;
  logoImg: string;
  description: string;
  location: string;
  links: Link[];
  socials: Social[];
}

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  icon: string;
  href: string;
}

export interface BrandsData {
  title: string;
  description: string;
  brands: Brand[];
}

export interface Brand {
  label: string;
  href: string;
  img: string;
  icon?: string;
}

export interface CasesData {
  title: string;
  description: string;
  cases: CaseItem[];
}

export interface CaseItem {
  title: string;
  sector: string;
  description: string;
  status: string;
  highlights: string[];
}

export interface TrustData {
  title: string;
  items: TrustItem[];
}

export interface TrustItem {
  value: string;
  label: string;
}

export interface Meta {
  title: string;
  description: string;
  lang: string;
  charset: string;
  ldJson: LdJson;
}

export interface LdJson {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  address?: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    email: string;
    contactType: string;
    areaServed?: string;
  };
  sameAs: string[];
}

export type Icon =
  | "DevIcon"
  | "FileIcon"
  | "PlanetIcon"
  | "ConfigIcon"
  | "CheckIcon"
  | "InstagramIcon"
  | "GithubIcon"
  | "TwitterIcon"
  | "FacebookIcon";
