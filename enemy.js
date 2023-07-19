function Enemy (x, y,parent,arr ){
    let self = this;
    this.x = x
    this.y = y
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 0.5;
    this.sprite = document.createElement('div')
    this.timerId = setInterval(this.move, 100)

    this.insertFlySwatter = function(){ 
        this.sprite.classList.add('swatter')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }
    
}
export { Enemy }