import comp from "D:/GitHub/foxprime.github.io/Fox/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"FoxPrime的博客\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"FoxPrime的博客\",\"heroImage\":\"/images/11.jpg\",\"heroText\":\"Hello\",\"actionText\":\"起步 →\",\"tagline\":\"欢迎观看\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"简明优先\",\"details\":\"做最简化的配置\"},{\"title\":\"随手更新\",\"details\":\"记录日常文件\"},{\"title\":\"性能高效\",\"details\":\"VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[],\"git\":{\"updatedTime\":1734765880000,\"contributors\":[{\"name\":\"FoxPrime-y\",\"username\":\"FoxPrime-y\",\"email\":\"yf17537413229@163.com\",\"commits\":2,\"url\":\"https://github.com/FoxPrime-y\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
