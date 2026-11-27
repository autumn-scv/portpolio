import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import WorkDetailPage from './WorkDetailPage.vue'
import { routes } from '../router.js'

function mountWith(slug) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  return mount(WorkDetailPage, { props: { slug }, global: { plugins: [router] } })
}

describe('작업물 상세', () => {
  it('slug 에 맞는 작업물을 렌더링한다', () => {
    const wrapper = mountWith('bappy')
    expect(wrapper.text()).toContain('BAPPY')
    expect(wrapper.text()).toContain('채용 문의하기')
  })
  it('없는 slug 면 안내 문구를 보여준다', () => {
    const wrapper = mountWith('no-such-work')
    expect(wrapper.text()).toContain('작업물을 찾을 수 없습니다')
  })
  it('채용 문의하기를 누르면 GA 이벤트를 보낸다', async () => {
    window.gtag = vi.fn()
    await mountWith('bappy').find('.cart').trigger('click')
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_click', { work: 'bappy' })
    delete window.gtag
  })
})
