interface config {
  width?: number
  height?: number
  rotate?: number
  font?: string
  fillStyle?: string
  textBaseline?: CanvasTextBaseline
}

/**
 * 水印
 *生成 new Watermark().setWatermark('嘻哈后台管理系统-' + formatTime())
 *删除 new Watermark().removeWatermark()
 */
export default class Watermark {
  public id
  constructor(id = 'watermark-background') {
    this.id = id
  }
  setWatermark(str: string, config: config = {}): void {
    if (document.getElementById(this.id) !== null) {
      document.body.removeChild(<Node>document.getElementById(this.id))
    }
    const cvs = document.createElement('canvas')
    cvs.width = config.width || 300
    cvs.height = config.height || 120
    const can2d = <CanvasRenderingContext2D>cvs.getContext('2d')
    can2d.rotate((-15 * Math.PI) / (config.rotate || 280))
    can2d.font = config.font || '12px Vedana'
    can2d.fillStyle = config.fillStyle || 'rgba(200, 200, 200, 0.30)'
    can2d.textAlign = 'left'
    can2d.textBaseline = config.textBaseline || 'middle'
    can2d.fillText(str, cvs.width / 8, cvs.height / 2)
    const div = document.createElement('div')
    div.id = this.id
    div.style.pointerEvents = 'none'
    div.style.top = '30px'
    div.style.left = '0px'
    div.style.position = 'fixed'
    div.style.zIndex = '10000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + cvs.toDataURL('image/png') + ') left top repeat'
    document.body.appendChild(div)
  }
  removeWatermark(): void {
    if (document.getElementById(this.id) !== null) {
      document.body.removeChild(<Node>document.getElementById(this.id))
    }
  }
}
