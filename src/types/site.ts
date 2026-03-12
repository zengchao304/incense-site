export interface NavigationItem {
  label: string
  href: `#${string}`
}

export interface LinkAction {
  label: string
  href: string
}

export interface ImageAsset {
  src: string
  alt: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  description: string
  primaryAction: LinkAction
  secondaryAction: LinkAction
  image: ImageAsset
  note: string
  highlights: string[]
}

export interface ProductItem {
  id: string
  name: string
  description: string
  image: ImageAsset
  accent: string
}

export interface AboutContent {
  eyebrow: string
  title: string
  paragraphs: string[]
  highlights: string[]
}

export interface FooterContent {
  email: string
  phone: string
  city: string
  socialLinks: LinkAction[]
}

export interface SiteContent {
  brandName: string
  navigation: NavigationItem[]
  hero: HeroContent
  products: ProductItem[]
  about: AboutContent
  footer: FooterContent
}
