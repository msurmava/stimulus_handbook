import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number, effect: { type: String, default: "kenburns" } }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      if (this.indexValue < 0){
        this.indexValue = 3}
        else if(this.indexValue > 3){
          this.indexValue = 0
        }
      element.hidden = index != this.indexValue
    })
  }
}