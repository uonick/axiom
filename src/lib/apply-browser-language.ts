if (/^ru\b/i.test(navigator.language)) {
  document.documentElement.lang = 'ru'
  document.querySelectorAll<HTMLElement>('[data-ru]').forEach((element) => {
    const russian = element.dataset.ru ?? ''
    if (element instanceof HTMLMetaElement) element.content = russian
    else if (element instanceof HTMLImageElement) element.alt = russian
    else element.textContent = russian
  })
}
