import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "FoxPrime",
  dest: "docs", 
  bundler: viteBundler(),
  theme: defaultTheme({
      navbar: [
             { text: '首页', link: '/' },
             { text: '我的洛谷练习题', link: '/luogu/' },
           ],
           sidebar:{
             '/luogu/':[
                  '',
                  'P1026.md', 
                  'P1036.md',
                  'P1138.md',
                  'P1179.md',
                  'P1308.md',
                  'P1781.md',
                  'P1789.md',
                  'P1881.md',
                  'P2002.md',
                  'P2241.md',
                  'P3392.md'
             ]
           }
  }),
})