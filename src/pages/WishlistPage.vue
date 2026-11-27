<template>
  <section class="list">
    <h1>찜한 작업</h1>
    <div v-if="wished.length" class="grid">
      <WorkCard v-for="w in wished" :key="w.slug" :work="w" />
    </div>
    <p v-else class="empty">
      아직 찜한 작업이 없습니다. 작업 상세에서 ♡ 찜하기를 눌러 보세요.
      <router-link to="/works">작업 보러 가기</router-link>
    </p>
  </section>
</template>

<script setup>
import WorkCard from '../components/WorkCard.vue'
import works from '../data/works.js'

const slugs = JSON.parse(localStorage.getItem('wishlist') || '[]')
const wished = works.filter((w) => slugs.includes(w.slug))
</script>

<style scoped>
.list { max-width: 1200px; margin: 0 auto; padding: 3rem 2rem; }
h1 { font-size: 1.6rem; margin-bottom: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2rem; }
.empty { color: #666; line-height: 1.8; }
.empty a { display: block; color: inherit; font-weight: 600; }
</style>
