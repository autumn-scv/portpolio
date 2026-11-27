<template>
  <header class="site-header">
    <span class="icon-btn" aria-hidden="true">☰</span>
    <router-link to="/" class="logo">Chogaeul</router-link>
    <nav class="icons">
      <a href="/portfolio/" class="text-link">Portfolio</a>
      <span class="icon-btn" aria-hidden="true">🔍</span>
      <span class="icon-btn" aria-hidden="true">♡</span>
      <span class="icon-btn" aria-hidden="true">👤</span>
      <span class="icon-btn" aria-hidden="true">🛍</span>
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
.text-link { font-size: 0.95rem; font-weight: 600; color: inherit; text-decoration: none; }
.text-link:hover { text-decoration: underline; }
/* 좁은 화면에선 가운데 로고와 겹치지 않게 장식 아이콘을 숨긴다 */
@media (max-width: 600px) { .icons .icon-btn { display: none; } }
.icon-btn { background: none; border: none; font-size: 1.1rem; cursor: default; }
</style>
