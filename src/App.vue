<script setup lang="ts">
import AboutSection from './components/sections/AboutSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProductGallery from './components/sections/ProductGallery.vue'
import SiteFooter from './components/sections/SiteFooter.vue'
import SiteHeader from './components/sections/SiteHeader.vue'
import { siteContent } from './data/site-content'
</script>

<template>
  <div class="min-h-screen bg-brand-ivory text-brand-ink">
    <SiteHeader :brand-name="siteContent.brandName" :navigation="siteContent.navigation" />
    <main>
      <HeroSection :content="siteContent.hero" />
      <ProductGallery :products="siteContent.products" />
      <AboutSection :content="siteContent.about" />
    </main>
    <SiteFooter :brand-name="siteContent.brandName" :content="siteContent.footer" />
  </div>
</template>
