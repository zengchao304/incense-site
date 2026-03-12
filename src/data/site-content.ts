import type { SiteContent } from '../types/site'

export const siteContent: SiteContent = {
  brandName: 'Incense Studio',
  navigation: [
    { label: '产品展示', href: '#products' },
    { label: '品牌介绍', href: '#about' },
    { label: '联系我们', href: '#contact' },
  ],
  hero: {
    eyebrow: '极简香气叙事',
    title: '用空间留白，承托一缕有记忆点的香。',
    description:
      '这是第一版品牌官网骨架，目标是在本周日之前交付一个可公开访问的高质感静态站。当前内容使用本地静态数据，后续可以无缝切换到 Sanity CMS。',
    primaryAction: { label: '探索产品', href: '#products' },
    secondaryAction: { label: '了解品牌', href: '#about' },
    image: {
      src: '/images/hero-placeholder.svg',
      alt: '香薰品牌首屏占位主视觉',
    },
    note: '当前为占位内容，可在收到客户文案与图片后快速替换。',
    highlights: ['静态首版先上线', '内容结构可接 Sanity', '桌面与手机双端适配'],
  },
  products: [
    {
      id: 'cedar-no-01',
      name: 'Cedar No.01',
      description: '木质调与柔和花香叠加，适合安静居家与夜间阅读氛围。',
      image: {
        src: '/images/product-01.svg',
        alt: '产品占位图一',
      },
      accent: '木质｜沉静',
    },
    {
      id: 'linen-no-02',
      name: 'Linen No.02',
      description: '轻盈净感与微弱皂香，适合白天与卧室场景。',
      image: {
        src: '/images/product-02.svg',
        alt: '产品占位图二',
      },
      accent: '净感｜留白',
    },
    {
      id: 'amber-no-03',
      name: 'Amber No.03',
      description: '温暖琥珀与丝绒质感，适合营造更完整的品牌记忆。',
      image: {
        src: '/images/product-03.svg',
        alt: '产品占位图三',
      },
      accent: '琥珀｜层次',
    },
  ],
  about: {
    eyebrow: '关于我们',
    title: '把香气当作空间中的第二层材质。',
    paragraphs: [
      '第一版页面聚焦于“快速上线 + 高级感展示”，因此在功能上保持克制，用更清晰的排版与图片占比来放大品牌气质。',
      '数据结构已经提前按未来 CMS 接入方式设计，后续只需替换内容来源，无需重做前端区块。',
    ],
    highlights: ['单页展示结构', '双端适配优先', '后续可接入 Sanity CMS'],
  },
  footer: {
    email: 'hello@incensestudio.com',
    phone: '+86 188-0000-0000',
    city: 'Shanghai / Remote',
    socialLinks: [
      { label: 'Instagram', href: 'https://www.instagram.com/' },
      { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/' },
    ],
  },
}
