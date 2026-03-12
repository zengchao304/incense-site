<script setup lang="ts">
import type { FooterContent } from '../../types/site'

defineProps<{
  brandName: string
  content: FooterContent
}>()
</script>

<template>
  <footer id="contact" class="section-fade-in bg-brand-ink text-brand-ivory" data-delay="3">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-14 lg:grid-cols-[1fr_auto] lg:px-10">
      <div>
        <p class="font-display text-2xl tracking-[0.2em] uppercase">{{ brandName }}</p>
        <p class="mt-4 max-w-xl text-sm leading-7 text-brand-sand">
          当前是第一版静态脚手架，适合先推进视觉与上线。后续会在不改页面结构的前提下接入 CMS 内容管理能力。
        </p>
      </div>
      <div class="grid gap-6 text-sm text-brand-sand sm:grid-cols-2">
        <div>
          <p class="mb-2 text-brand-ivory">联系信息</p>
          <p>{{ content.email }}</p>
          <p>{{ content.phone }}</p>
          <p>{{ content.city }}</p>
        </div>
        <div>
          <p class="mb-2 text-brand-ivory">社交链接</p>
          <a
            v-for="link in content.socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="block transition-colors duration-300 hover:text-brand-ivory"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
