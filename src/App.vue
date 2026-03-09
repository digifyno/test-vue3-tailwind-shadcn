<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-4">
    <!-- Header badge -->
    <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium uppercase tracking-widest">
      <span class="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
      End-to-End Test Environment
    </div>

    <div class="max-w-3xl w-full">
      <!-- Hero card -->
      <div class="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <!-- Hero header -->
        <div class="relative bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-10 text-center overflow-hidden">
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
          <div class="relative">
            <h1 class="text-4xl font-bold text-white mb-3 tracking-tight">
              Test: Vue 3 + Tailwind + shadcn
            </h1>
            <p class="text-purple-100 text-lg">
              Validating the Vue 3 + Tailwind + shadcn-vue starter stack
            </p>
          </div>
        </div>

        <!-- Feature list -->
        <div class="p-8">
          <h2 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Stack Components</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="item in stackItems" :key="item.title"
                 class="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group">
              <div class="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-lg"
                   :class="item.iconBg">
                {{ item.icon }}
              </div>
              <div>
                <h3 class="font-semibold text-foreground text-sm">{{ item.title }}</h3>
                <p class="text-xs text-muted-foreground mt-0.5">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Test status -->
          <div class="mt-8 p-4 rounded-lg border border-green-500/30 bg-green-500/10">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
              <div>
                <p class="text-sm font-semibold text-green-300">All systems operational</p>
                <p class="text-xs text-green-400/70 mt-0.5">Vue 3 + Tailwind + shadcn-vue integration verified</p>
              </div>
            </div>
          </div>

          <!-- Footer links -->
          <div class="mt-6 pt-6 border-t border-border flex flex-wrap justify-center gap-3">
            <a v-for="link in links" :key="link.label"
               :href="link.href" target="_blank"
               class="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors"
               :class="link.class">
              <span>{{ link.label }}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <p class="text-center text-xs text-muted-foreground mt-6">
        Test: Vue 3 + Tailwind + shadcn &mdash; RSI Platform end-to-end test product
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const stackItems = [
  {
    icon: '⚡',
    iconBg: 'bg-green-500/20 text-green-400',
    title: 'Vue 3.4+',
    description: 'Composition API with <script setup> and full TypeScript support'
  },
  {
    icon: '🎨',
    iconBg: 'bg-sky-500/20 text-sky-400',
    title: 'Tailwind CSS 3.4+',
    description: 'Utility-first styling with dark mode and responsive design'
  },
  {
    icon: '🧩',
    iconBg: 'bg-violet-500/20 text-violet-400',
    title: 'shadcn-vue',
    description: 'Pre-configured design system variables and component-ready setup'
  },
  {
    icon: '🔷',
    iconBg: 'bg-blue-500/20 text-blue-400',
    title: 'TypeScript 5.4+',
    description: 'Strict mode enabled with full type safety across the project'
  },
  {
    icon: '🚀',
    iconBg: 'bg-orange-500/20 text-orange-400',
    title: 'Vite 5.2+',
    description: 'Lightning-fast HMR and optimized production builds'
  },
  {
    icon: '📦',
    iconBg: 'bg-pink-500/20 text-pink-400',
    title: 'PostCSS + Autoprefixer',
    description: 'Modern CSS pipeline with cross-browser compatibility'
  }
]

const links = [
  {
    label: 'Vue 3 Docs',
    href: 'https://vuejs.org',
    class: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow'
  },
  {
    label: 'Tailwind CSS',
    href: 'https://tailwindcss.com/docs',
    class: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  },
  {
    label: 'shadcn-vue',
    href: 'https://www.shadcn-vue.com',
    class: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  }
]
</script>
