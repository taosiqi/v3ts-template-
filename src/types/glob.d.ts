declare interface SetData {
  path: string
  content: string
}
declare interface ResData {
  path: string
  content: string
}
declare interface ProjectState {
  domain: string
  userServer: string
}
declare interface menuData {
  icon?: string
  index: string | ''
  title:string
  sub?:menuData[]
}