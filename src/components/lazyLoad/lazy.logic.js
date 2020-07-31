import { LazyLoad } from './LazyLoad'

const images = document.querySelectorAll('.img')

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}

const lazyLoad = new LazyLoad(images, options)

lazyLoad.start()
