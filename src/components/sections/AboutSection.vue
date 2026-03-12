<script setup lang="ts">
import type { AboutContent } from '../../types/site'

defineProps<{
  content: AboutContent
}>()
</script>

<template>
  <section id="about" class="section-fade-in border-b border-brand-sand/70" data-delay="2">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
      <div>
        <p class="text-xs uppercase tracking-[0.35em] text-brand-mist">{{ content.eyebrow }}</p>
        <h2 class="mt-4 font-display text-3xl leading-tight text-brand-ink md:text-5xl">
          {{ content.title }}
        </h2>
      </div>
      <div>
        <div class="space-y-5 text-base leading-8 text-brand-mist">
          <p v-for="paragraph in content.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div
            v-for="highlight in content.highlights"
            :key="highlight"
            class="rounded-[1.5rem] border border-brand-sand bg-brand-paper px-5 py-5 shadow-[0_16px_40px_rgba(53,40,32,0.04)]"
          >
            <p class="text-xs uppercase tracking-[0.28em] text-brand-mist">亮点</p>
            <p class="mt-3 text-lg text-brand-ink">{{ highlight }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
