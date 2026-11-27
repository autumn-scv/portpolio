<template>
  <header class="site-header">
    <button type="button" class="profile" aria-label="메뉴" :aria-expanded="menu" @click="menu = !menu">☰</button>
    <nav v-if="menu" class="menu" @click="menu = false">
      <router-link to="/">Home</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/wishlist">찜한 작업</router-link>
      <a href="/portfolio/">Portfolio</a>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-link to="/" class="logo">Chogaeul</router-link>
    <nav class="icons">
      <button type="button" class="profile" aria-label="작업 검색" title="작업 검색" @click="toggle">🔍</button>
      <router-link to="/wishlist" class="profile" aria-label="찜한 작업" title="찜한 작업">♡</router-link>
      <a href="/portfolio/" class="profile" aria-label="포트폴리오" title="포트폴리오">👤</a>
    </nav>
    <input
      v-if="open" ref="box" :value="route.query.q ?? ''" type="search" class="search"
      placeholder="작업 검색" aria-label="작업 검색" @input="search($event.target.value)" @keydown.esc="open = false"
    />
  </header>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const open = ref(false)
const menu = ref(false)
watch(() => route.fullPath, () => { menu.value = false })
const box = ref(null)

async function toggle() {
  open.value = !open.value
  if (open.value) { await nextTick(); box.value.focus() }
}
// 치는 대로 작업 목록에서 거른다. 검색어는 주소(?q=)에 남아 새로고침·공유해도 유지된다
function search(q) {
  router.replace({ path: '/works', query: q ? { q } : {} })
}
</script>

<style scoped>
.site-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 2rem; position: relative;
}
.logo {
  font-size: 1.4rem; font-weight: 700; color: inherit; text-decoration: none;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.icons { display: flex; align-items: center; gap: 1rem; }
.profile { font-size: 1.1rem; color: inherit; text-decoration: none; background: none; border: none; padding: 0; cursor: pointer; }
.menu {
  position: absolute; top: 100%; left: 2rem; z-index: 10; display: flex; flex-direction: column;
  min-width: 180px; padding: 0.5rem 0; background: #fff; border: 1px solid #eee; border-radius: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.menu a { padding: 0.6rem 1.2rem; color: inherit; text-decoration: none; font-weight: 600; }
.menu a:hover, .menu a.router-link-exact-active { background: #f5f5f5; }
.search {
  position: absolute; top: 100%; right: 2rem; z-index: 10; width: min(320px, calc(100% - 4rem));
  padding: 0.6rem 0.9rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.95rem; background: #fff;
}
</style>
