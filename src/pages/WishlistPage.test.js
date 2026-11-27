import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import WishlistPage from './WishlistPage.vue'
import { routes } from '../router.js'

const mountPage = () =>
  mount(WishlistPage, { global: { plugins: [createRouter({ history: createMemoryHistory(), routes })] } })

describe('찜한 작업', () => {
  afterEach(() => localStorage.clear())
  it('찜한 작업만 카드로 보여 준다', () => {
    localStorage.setItem('wishlist', JSON.stringify(['bappy']))
    const cards = mountPage().findAll('[data-test="work-card"]')
    expect(cards.length).toBe(1)
    expect(cards[0].text()).toContain('BAPPY')
  })
  it('찜한 게 없으면 안내 문구를 보여 준다', () => {
    expect(mountPage().text()).toContain('아직 찜한 작업이 없습니다')
  })
})
