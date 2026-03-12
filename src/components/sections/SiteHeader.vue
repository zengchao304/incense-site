<script setup lang="ts">
import type { NavigationItem } from '../../types/site'

defineProps<{
  brandName: string
  navigation: NavigationItem[]
}>()
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-brand-sand/60 bg-brand-ivory/90 backdrop-blur">
    <div class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-10">
      <a href="#top" class="font-display text-sm tracking-[0.35em] text-brand-ink uppercase sm:text-lg sm:tracking-[0.3em]">
        {{ brandName }}
      </a>
      <nav aria-label="主导航" class="flex flex-wrap items-center gap-4 text-[11px] tracking-[0.12em] text-brand-mist sm:justify-end sm:gap-6 sm:text-sm sm:tracking-normal">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="transition-colors duration-300 hover:text-brand-ink"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
