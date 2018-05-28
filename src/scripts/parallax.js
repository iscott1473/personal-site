
function Scroller(x, y, el){
  this.x = x;
  this.y = y;
  this.element = el;
  this.setTranslate = (xpos, ypos, element) => {
  el.style.transform = "translate3d("+xpos+", "+ypos+"px, 0)";
  }
  this.scrollLoop = () => {
    div = this.element
    const currentY = div.getBoundingClientRect().top - window.innerHeight;
    const staticY =  div.getBoundingClientRect().top + window.scrollY - window.innerHeight;
    let xPos = window.scrollX;
    let yPos = window.scrollY - staticY;  
    console.log(currentY)
    if (currentY <= 0){
      this.setTranslate(this.x * xPos, this.y * yPos, div)
    }
  };
}
const video = document.getElementsByClassName('video')[0]
const videoScroller = new Scroller(0, -1, video)
window.addEventListener('scroll', videoScroller)