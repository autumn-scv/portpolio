// GA4. 측정 ID 가 없으면(로컬 dev·테스트) 아무것도 안 한다.
// SPA 화면 이동 page_view 는 GA4 향상된 측정(브라우저 기록 이벤트 기반 페이지 변경)이 자동으로 센다.
const id = import.meta.env.VITE_GA_ID

if (id) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', id)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
}

export function track(name, params) {
  window.gtag?.('event', name, params)
}
