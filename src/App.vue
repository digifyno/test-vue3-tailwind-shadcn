<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-4">
    <!-- Header badge -->
    <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium uppercase tracking-widest">
      <span class="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
      End-to-End Test Environment
    </div>

    <div class="max-w-3xl w-full space-y-6">
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

      <!-- Create Task Form Test -->
      <div class="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div class="p-6 border-b border-border">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-md bg-violet-500/20 flex items-center justify-center text-violet-400 text-lg">&#x2705;</div>
            <div>
              <h2 class="font-semibold text-foreground">Test: Create Task &#x2014; Required Fields</h2>
              <p class="text-xs text-muted-foreground mt-0.5">Validates required field enforcement and form submission</p>
            </div>
          </div>
        </div>

        <div class="p-6">
          <!-- Success banner -->
          <div v-if="submitSuccess" class="mb-6 p-4 rounded-lg border border-green-500/30 bg-green-500/10 flex items-start gap-3">
            <span class="text-green-400 text-lg flex-shrink-0">&#x2713;</span>
            <div>
              <p class="text-sm font-semibold text-green-300">Task created successfully</p>
              <p class="text-xs text-green-400/70 mt-1">All required fields were present. Form submitted correctly.</p>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" novalidate>
            <div class="space-y-5">
              <!-- Required fields progress -->
              <div class="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <div class="flex gap-1">
                  <span v-for="i in 3" :key="i"
                    :class="['w-6 h-1.5 rounded-full transition-colors', i <= requiredFilled ? 'bg-violet-500' : 'bg-secondary']">
                  </span>
                </div>
                <span>{{ requiredFilled }}/3 required fields</span>
              </div>

              <!-- Title field (required) -->
              <div>
                <label for="task-title" class="block text-sm font-medium text-foreground mb-1.5">
                  Title <span class="text-destructive">*</span>
                </label>
                <input
                  id="task-title"
                  v-model="form.title"
                  type="text"
                  aria-required="true"
                  placeholder="Enter task title"
                  :class="[
                    'w-full px-3 py-2 rounded-md border text-sm bg-background text-foreground placeholder:text-muted-foreground transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
                    errors.title ? 'border-destructive bg-destructive/5' : 'border-input'
                  ]"
                  @blur="touchField('title')"
                />
                <p v-if="errors.title" class="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  {{ errors.title }}
                </p>
              </div>

              <!-- Description field (required) -->
              <div>
                <label for="task-description" class="block text-sm font-medium text-foreground mb-1.5">
                  Description <span class="text-destructive">*</span>
                </label>
                <textarea
                  id="task-description"
                  v-model="form.description"
                  rows="3"
                  aria-required="true"
                  placeholder="Describe the task"
                  :class="[
                    'w-full px-3 py-2 rounded-md border text-sm bg-background text-foreground placeholder:text-muted-foreground transition-colors resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
                    errors.description ? 'border-destructive bg-destructive/5' : 'border-input'
                  ]"
                  @blur="touchField('description')"
                ></textarea>
                <p v-if="errors.description" class="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  {{ errors.description }}
                </p>
              </div>

              <!-- Category field (required) -->
              <div>
                <label for="task-category" class="block text-sm font-medium text-foreground mb-1.5">
                  Category <span class="text-destructive">*</span>
                </label>
                <select
                  id="task-category"
                  v-model="form.category"
                  aria-required="true"
                  :class="[
                    'w-full px-3 py-2 rounded-md border text-sm bg-background text-foreground transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
                    errors.category ? 'border-destructive bg-destructive/5' : 'border-input'
                  ]"
                  @blur="touchField('category')"
                  @change="touchField('category')"
                >
                  <option value="">Select a category&hellip;</option>
                  <option value="feature">Feature</option>
                  <option value="bugfix">Bug Fix</option>
                  <option value="refactor">Refactor</option>
                  <option value="performance">Performance</option>
                  <option value="security">Security</option>
                </select>
                <p v-if="errors.category" class="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  {{ errors.category }}
                </p>
              </div>

              <!-- Priority field (optional) -->
              <div>
                <label for="task-priority" class="block text-sm font-medium text-foreground mb-1.5">
                  Priority
                  <span class="text-xs text-muted-foreground font-normal ml-1">(optional)</span>
                </label>
                <select
                  id="task-priority"
                  v-model="form.priority"
                  class="w-full px-3 py-2 rounded-md border border-input text-sm bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">No priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <!-- Submit button -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  class="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
                >
                  Create Task
                </button>
                <button
                  type="button"
                  @click="resetForm"
                  class="px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>

          <!-- Test result summary -->
          <div v-if="submitAttempted" class="mt-6 pt-6 border-t border-border">
            <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Validation Results</h3>
            <div class="space-y-2">
              <div v-for="field in validationSummary" :key="field.name"
                   class="flex items-center gap-2.5 text-sm">
                <span :class="field.valid ? 'text-green-400' : 'text-destructive'">
                  {{ field.valid ? '&#x2713;' : '&#x2717;' }}
                </span>
                <span class="text-foreground font-medium">{{ field.label }}</span>
                <span class="text-muted-foreground text-xs">
                  {{ field.valid ? 'OK' : field.required ? 'Required &mdash; missing' : 'Optional &mdash; skipped' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Update Task Form Test -->
      <div class="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div class="p-6 border-b border-border">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg">&#x1F504;</div>
            <div>
              <h2 class="font-semibold text-foreground">Test: Update Task &#x2014; Conditional Fields</h2>
              <p class="text-xs text-muted-foreground mt-0.5">Validates conditionally required fields based on task status</p>
            </div>
          </div>
        </div>

        <div class="p-6">
          <!-- Success banner -->
          <div v-if="updateSubmitSuccess" class="mb-6 p-4 rounded-lg border border-green-500/30 bg-green-500/10 flex items-start gap-3">
            <span class="text-green-400 text-lg flex-shrink-0">&#x2713;</span>
            <div>
              <p class="text-sm font-semibold text-green-300">Task updated successfully</p>
              <p class="text-xs text-green-400/70 mt-1">Conditional fields validated correctly.</p>
            </div>
          </div>

          <form id="update-form" @submit.prevent="handleUpdateSubmit" novalidate>
            <div class="space-y-5">
              <!-- Title field -->
              <div>
                <label for="update-title" class="block text-sm font-medium text-foreground mb-1.5">
                  Title
                </label>
                <input
                  id="update-title"
                  v-model="updateForm.title"
                  type="text"
                  class="w-full px-3 py-2 rounded-md border border-input text-sm bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>

              <!-- Status field -->
              <div>
                <label for="update-status" class="block text-sm font-medium text-foreground mb-1.5">
                  Status <span class="text-destructive">*</span>
                </label>
                <select
                  id="update-status"
                  v-model="updateForm.status"
                  class="w-full px-3 py-2 rounded-md border border-input text-sm bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="blocked">Blocked</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <!-- Blocked Reason (conditional: only shown/required when status is blocked) -->
              <div v-if="updateForm.status === 'blocked'">
                <label for="update-blocked-reason" class="block text-sm font-medium text-foreground mb-1.5">
                  Blocked Reason <span class="text-destructive">*</span>
                  <span class="text-xs text-muted-foreground font-normal ml-1">(required when blocked)</span>
                </label>
                <textarea
                  id="update-blocked-reason"
                  v-model="updateForm.blockedReason"
                  rows="2"
                  aria-required="true"
                  placeholder="Describe why the task is blocked"
                  :class="[
                    'w-full px-3 py-2 rounded-md border text-sm bg-background text-foreground placeholder:text-muted-foreground transition-colors resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
                    updateErrors.blockedReason ? 'border-destructive bg-destructive/5' : 'border-input'
                  ]"
                  @blur="updateTouched.blockedReason = true"
                ></textarea>
                <p v-if="updateErrors.blockedReason" class="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  {{ updateErrors.blockedReason }}
                </p>
              </div>

              <!-- Buttons -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  class="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
                >
                  Update Task
                </button>
                <button
                  type="button"
                  @click="resetUpdateForm"
                  class="px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer note -->
      <p class="text-center text-xs text-muted-foreground">
        Test: Vue 3 + Tailwind + shadcn &mdash; RSI Platform end-to-end test product
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const stackItems = [
  {
    icon: '&#x26A1;',
    iconBg: 'bg-green-500/20 text-green-400',
    title: 'Vue 3.4+',
    description: 'Composition API with script setup and full TypeScript support'
  },
  {
    icon: '&#x1F3A8;',
    iconBg: 'bg-sky-500/20 text-sky-400',
    title: 'Tailwind CSS 3.4+',
    description: 'Utility-first styling with dark mode and responsive design'
  },
  {
    icon: '&#x1F9E9;',
    iconBg: 'bg-violet-500/20 text-violet-400',
    title: 'shadcn-vue',
    description: 'Pre-configured design system variables and component-ready setup'
  },
  {
    icon: '&#x1F537;',
    iconBg: 'bg-blue-500/20 text-blue-400',
    title: 'TypeScript 5.4+',
    description: 'Strict mode enabled with full type safety across the project'
  },
  {
    icon: '&#x1F680;',
    iconBg: 'bg-orange-500/20 text-orange-400',
    title: 'Vite 5.2+',
    description: 'Lightning-fast HMR and optimized production builds'
  },
  {
    icon: '&#x1F4E6;',
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

// Form state
const form = reactive({
  title: '',
  description: '',
  category: '',
  priority: ''
})

const touched = reactive({
  title: false,
  description: false,
  category: false
})

const submitAttempted = ref(false)
const submitSuccess = ref(false)

function validate(): Record<string, string> {
  const errs: Record<string, string> = {}
  if (!form.title.trim()) errs.title = 'Title is required'
  if (!form.description.trim()) errs.description = 'Description is required'
  if (!form.category) errs.category = 'Category is required'
  return errs
}

const errors = computed(() => {
  if (!submitAttempted.value) {
    const errs: Record<string, string> = {}
    const all = validate()
    if (touched.title && all.title) errs.title = all.title
    if (touched.description && all.description) errs.description = all.description
    if (touched.category && all.category) errs.category = all.category
    return errs
  }
  return validate()
})

const requiredFilled = computed(() =>
  [!!form.title.trim(), !!form.description.trim(), !!form.category].filter(Boolean).length
)

const validationSummary = computed(() => [
  { name: 'title', label: 'Title', required: true, valid: !!form.title.trim() },
  { name: 'description', label: 'Description', required: true, valid: !!form.description.trim() },
  { name: 'category', label: 'Category', required: true, valid: !!form.category },
  { name: 'priority', label: 'Priority', required: false, valid: true }
])

function touchField(field: 'title' | 'description' | 'category') {
  touched[field] = true
}

function handleSubmit() {
  submitAttempted.value = true
  submitSuccess.value = false
  const errs = validate()
  if (Object.keys(errs).length === 0) {
    submitSuccess.value = true
  }
}

function resetForm() {
  form.title = ''
  form.description = ''
  form.category = ''
  form.priority = ''
  touched.title = false
  touched.description = false
  touched.category = false
  submitAttempted.value = false
  submitSuccess.value = false
}

// Update Task — Conditional Fields state
const updateForm = reactive({
  title: 'Fix login bug',
  status: 'pending',
  blockedReason: ''
})

const updateTouched = reactive({
  blockedReason: false
})

const updateSubmitAttempted = ref(false)
const updateSubmitSuccess = ref(false)

function validateUpdate(): Record<string, string> {
  const errs: Record<string, string> = {}
  if (updateForm.status === 'blocked' && !updateForm.blockedReason.trim()) {
    errs.blockedReason = 'Blocked reason is required when status is Blocked'
  }
  return errs
}

const updateErrors = computed(() => {
  if (!updateSubmitAttempted.value) {
    const errs: Record<string, string> = {}
    const all = validateUpdate()
    if (updateTouched.blockedReason && all.blockedReason) errs.blockedReason = all.blockedReason
    return errs
  }
  return validateUpdate()
})

function handleUpdateSubmit() {
  updateSubmitAttempted.value = true
  updateSubmitSuccess.value = false
  const errs = validateUpdate()
  if (Object.keys(errs).length === 0) {
    updateSubmitSuccess.value = true
  }
}

function resetUpdateForm() {
  updateForm.title = 'Fix login bug'
  updateForm.status = 'pending'
  updateForm.blockedReason = ''
  updateTouched.blockedReason = false
  updateSubmitAttempted.value = false
  updateSubmitSuccess.value = false
}
</script>
