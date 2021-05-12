import { Alarm, User, Lock } from '@icon-park/vue-next'

const components = [Alarm, User, Lock]
//字节第三方图标库
export default (app: any) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
