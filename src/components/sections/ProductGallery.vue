<script setup lang="ts">
import type { ProductItem } from '../../types/site'

defineProps<{
  products: ProductItem[]
}>()
</script>

<template>
  <section id="products" class="section-fade-in border-b border-brand-sand/70 bg-brand-paper/70" data-delay="1">
    <div class="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div class="max-w-2xl">
        <p class="text-xs uppercase tracking-[0.35em] text-brand-mist">产品展示</p>
        <h2 class="mt-4 font-display text-3xl leading-tight text-brand-ink md:text-5xl">
          为正式图片预留的展示网格
        </h2>
        <p class="mt-5 text-base leading-8 text-brand-mist">
          当前使用本地占位图与静态数据，方便你先推进布局、动效与响应式，后续收到素材后只需替换图片与文案。
        </p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(product, index) in products"
          :key="product.id"
          class="group overflow-hidden rounded-[1.75rem] border border-brand-sand/80 bg-brand-ivory transition-transform duration-300 hover:-translate-y-1"
          :class="index === 1 ? 'md:translate-y-8' : ''"
        >
          <div class="overflow-hidden">
            <img
              :src="product.image.src"
              :alt="product.image.alt"
              loading="lazy"
              class="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div class="space-y-3 px-6 py-6">
            <p class="text-xs uppercase tracking-[0.25em] text-brand-mist">{{ product.accent }}</p>
            <h3 class="font-display text-2xl text-brand-ink">{{ product.name }}</h3>
            <p class="text-sm leading-7 text-brand-mist">{{ product.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
