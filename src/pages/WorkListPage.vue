<template>
  <section class="list">
    <h1>Works</h1>
    <div class="filters">
      <button
        v-for="c in categories" :key="c" type="button"
        :class="{ active: c === selected }" @click="selected = c"
      >{{ c }}</button>
    </div>
    <div class="grid">
      <WorkCard v-for="w in filtered" :key="w.slug" :work="w" />
    </div>
    <p v-if="!filtered.length" class="empty">'{{ q }}'에 맞는 작업이 없습니다.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import WorkCard from '../components/WorkCard.vue'
import works from '../data/works.js'

const categories = ['전체', ...new Set(works.map(w => w.category))]
const selected = ref('전체')
const route = useRoute()
// 검색어는 헤더 🔍 검색창이 주소(?q=)로 넘겨준다
const q = computed(() => route.query.q ?? '')

const matches = (w, text) =>
  [w.title, w.summary, w.description, w.category].join(' ').toLowerCase().includes(text)
const filtered = computed(() => {
  const text = q.value.trim().toLowerCase()
  return works.filter(w =>
    (selected.value === '전체' || w.category === selected.value) && (!text || matches(w, text)))
})
</script>

<style scoped>
.list { max-width: 1200px; margin: 0 auto; padding: 3rem 2rem; }
h1 { font-size: 1.6rem; margin-bottom: 1rem; }
.empty { color: #666; }
.filters { display: flex; gap: 0.5rem; margin-bottom: 2rem; }
.filters button {
  background: none; border: 1px solid #ddd; border-radius: 999px;
  padding: 0.4rem 1rem; font-size: 0.85rem; cursor: pointer; color: #555;
}
.filters button.active { background: #1a1a1a; border-color: #1a1a1a; color: #fff; }
.grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2rem;
}
</style>
