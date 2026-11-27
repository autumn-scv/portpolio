<template>
  <header class="site-header">
    <span class="icon-btn" aria-hidden="true">☰</span>
    <router-link to="/" class="logo">Chogaeul</router-link>
    <nav class="icons">
      <router-link :to="{ path: '/works', query: { search: null } }" class="profile" aria-label="작업 검색" title="작업 검색">🔍</router-link>
      <router-link to="/wishlist" class="profile" aria-label="찜한 작업" title="찜한 작업">♡</router-link>
      <a href="/portfolio/" class="profile" aria-label="포트폴리오" title="포트폴리오">👤</a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 2rem;
}
.logo {
  font-size: 1.4rem; font-weight: 700; color: inherit; text-decoration: none;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.icons { display: flex; align-items: center; gap: 1rem; }
.profile { font-size: 1.1rem; color: inherit; text-decoration: none; }
/* 좁은 화면에선 가운데 로고와 겹치지 않게 장식 아이콘을 숨긴다 */
@media (max-width: 600px) { .icons .icon-btn { display: none; } }
.icon-btn { background: none; border: none; font-size: 1.1rem; cursor: default; }
</style>
