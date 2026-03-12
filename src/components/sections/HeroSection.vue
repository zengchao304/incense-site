<script setup lang="ts">
import type { HeroContent } from '../../types/site'

defineProps<{
  content: HeroContent
}>()
</script>

<template>
  <section id="top" class="border-b border-brand-sand/70">
    <div class="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-20">
      <div class="flex max-w-2xl flex-col justify-center">
        <span class="mb-5 text-xs uppercase tracking-[0.35em] text-brand-mist">
          {{ content.eyebrow }}
        </span>
        <h1 class="max-w-3xl font-display text-4xl leading-tight text-brand-ink md:text-6xl md:leading-[1.05]">
          {{ content.title }}
        </h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-brand-mist md:text-lg">
          {{ content.description }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            :href="content.primaryAction.href"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-medium tracking-[0.12em] shadow-[0_18px_40px_rgba(25,22,18,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
            style="color: var(--color-brand-ivory)"
          >
            <span>{{ content.primaryAction.label }}</span>
            <span aria-hidden="true">↘</span>
          </a>
          <a
            :href="content.secondaryAction.href"
            class="inline-flex items-center justify-center rounded-full border border-brand-stone px-6 py-3 text-sm tracking-[0.12em] text-brand-ink transition-colors duration-300 hover:border-brand-ink"
          >
            {{ content.secondaryAction.label }}
          </a>
        </div>
        <p class="mt-6 text-sm leading-7 text-brand-mist">
          {{ content.note }}
        </p>
        <ul class="mt-6 flex flex-wrap gap-3">
          <li
            v-for="highlight in content.highlights"
            :key="highlight"
            class="rounded-full border border-brand-sand bg-brand-paper px-4 py-2 text-xs text-brand-mist"
          >
            {{ highlight }}
          </li>
        </ul>
        <a
          href="#products"
          class="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.18em] text-brand-mist uppercase"
        >
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-sand bg-brand-paper text-base text-brand-ink">
            ↓
          </span>
          向下浏览精选产品
        </a>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] border border-brand-sand/80 bg-brand-paper shadow-[0_30px_90px_rgba(53,40,32,0.08)]">
        <img
          :src="content.image.src"
          :alt="content.image.alt"
          class="h-full min-h-[26rem] w-full object-cover"
        />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-ink/15 to-transparent"></div>
      </div>
    </div>
  </section>
</template>
