import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import SiteHeader from './SiteHeader.vue'
import { routes } from '../router.js'

describe('헤더', () => {
  it('햄버거를 누르면 메뉴가 열리고 다시 누르면 닫힌다', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes })
    const wrapper = mount(SiteHeader, { global: { plugins: [router] } })
    const burger = wrapper.find('button[aria-label="메뉴"]')
    expect(wrapper.find('.menu').exists()).toBe(false)
    await burger.trigger('click')
    expect(wrapper.find('.menu').text()).toContain('찜한 작업')
    await burger.trigger('click')
    expect(wrapper.find('.menu').exists()).toBe(false)
  })
})
