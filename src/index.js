import Slide from './Slide'
import SlideItem from './item'

const SlickSlide = {
  Slide,
  SlideItem
}
SlickSlide.install = function (Vue) {
  Vue.component(Slide.name, Slide)
  Vue.component(SlideItem.name, SlideItem)
}

export default SlickSlide
