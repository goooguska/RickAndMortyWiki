const options = {
  rootMargin: '0px',
  threshold: 1.0
}
export function useIntersectionObserver(
  loadMoreItems: () => void,
  observer: HTMLDivElement | null
) {
  const callback: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      loadMoreItems()
    }
  }
  if (observer) {
    const obs = new IntersectionObserver(callback, options)
    obs.observe(observer)
    return () => {
      obs.unobserve(observer)
    }
  }
}
