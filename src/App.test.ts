import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('Create Task — Required Fields', () => {
  it('does not show validation errors before form interaction', () => {
    const wrapper = mount(App)
    expect(wrapper.find('[id="task-title"]').classes()).not.toContain('border-destructive')
    expect(wrapper.find('[id="task-description"]').classes()).not.toContain('border-destructive')
    expect(wrapper.find('[id="task-category"]').classes()).not.toContain('border-destructive')
  })

  it('shows error for title field after blur when empty', async () => {
    const wrapper = mount(App)
    await wrapper.find('#task-title').trigger('blur')
    expect(wrapper.find('#task-title').classes()).toContain('border-destructive')
    expect(wrapper.text()).toContain('Title is required')
  })

  it('shows error for description field after blur when empty', async () => {
    const wrapper = mount(App)
    await wrapper.find('#task-description').trigger('blur')
    expect(wrapper.find('#task-description').classes()).toContain('border-destructive')
    expect(wrapper.text()).toContain('Description is required')
  })

  it('shows error for category field after change with empty value', async () => {
    const wrapper = mount(App)
    await wrapper.find('#task-category').trigger('change')
    expect(wrapper.find('#task-category').classes()).toContain('border-destructive')
    expect(wrapper.text()).toContain('Category is required')
  })

  it('shows all required field errors when submitting empty form', async () => {
    const wrapper = mount(App)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Title is required')
    expect(wrapper.text()).toContain('Description is required')
    expect(wrapper.text()).toContain('Category is required')
  })

  it('does not show success message when required fields are missing', async () => {
    const wrapper = mount(App)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).not.toContain('Task created successfully')
  })

  it('clears title error when title is filled in', async () => {
    const wrapper = mount(App)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Title is required')
    await wrapper.find('#task-title').setValue('My task')
    expect(wrapper.text()).not.toContain('Title is required')
  })

  it('shows success message when all required fields are filled', async () => {
    const wrapper = mount(App)
    await wrapper.find('#task-title').setValue('Fix login bug')
    await wrapper.find('#task-description').setValue('The login form submits without validation')
    await wrapper.find('#task-category').setValue('bugfix')
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Task created successfully')
    expect(wrapper.text()).not.toContain('Title is required')
    expect(wrapper.text()).not.toContain('Description is required')
    expect(wrapper.text()).not.toContain('Category is required')
  })

  it('shows success with optional priority field left empty', async () => {
    const wrapper = mount(App)
    await wrapper.find('#task-title').setValue('Improve perf')
    await wrapper.find('#task-description').setValue('Optimize database queries')
    await wrapper.find('#task-category').setValue('performance')
    // priority intentionally left empty
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Task created successfully')
  })

  it('resets form and clears errors after clicking Reset', async () => {
    const wrapper = mount(App)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Title is required')
    const buttons = wrapper.findAll('button')
    const resetBtn = buttons.find(b => b.text() === 'Reset')
    await resetBtn!.trigger('click')
    expect(wrapper.text()).not.toContain('Title is required')
    expect(wrapper.text()).not.toContain('Task created successfully')
  })

  it('priority field is optional and has no required indicator', () => {
    const wrapper = mount(App)
    const priorityLabel = wrapper.find('label[for="task-priority"]')
    expect(priorityLabel.exists()).toBe(true)
    expect(priorityLabel.text()).toContain('optional')
    // No red asterisk for priority
    expect(priorityLabel.find('.text-destructive').exists()).toBe(false)
  })

  it('shows validation summary after submit attempt', async () => {
    const wrapper = mount(App)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Validation Results')
  })
})
