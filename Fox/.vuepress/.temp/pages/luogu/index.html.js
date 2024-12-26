import comp from "D:/GitHub/foxprime.github.io/Fox/.vuepress/.temp/pages/luogu/index.html.vue"
const data = JSON.parse("{\"path\":\"/luogu/\",\"title\":\"洛谷习题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"洛谷网址\",\"slug\":\"洛谷网址\",\"link\":\"#洛谷网址\",\"children\":[]},{\"level\":2,\"title\":\"练习内容\",\"slug\":\"练习内容\",\"link\":\"#练习内容\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"luogu/README.md\"}")
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
