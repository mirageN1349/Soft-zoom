export class LazyLoad {
  constructor(images, options) {
    this.options = options
    this.images = images
  }

  static loadImg(image) {
    image.src = image.getAttribute('data')
  }

  handleImg(myImg) {
    myImg.forEach(img => {
      if (img.intersectionRatio > 0) LazyLoad.loadImg(img.target)
    })
  }

  start() {
    const observer = new IntersectionObserver(this.handleImg, this.options)
    this.images.forEach(img => {
      observer.observe(img)
    })
  }
}
