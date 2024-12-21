import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "FoxPrime",
  dest: "docs", 
  bundler: viteBundler(),
  theme: defaultTheme({
      nav: [
             { text: '首页', link: '/' },
             { text: '我的洛谷练习题', link: '/luogu/' },
           ],
           sidebar:{
             '/blog/' :[
 
             ]
           }
  }),
})