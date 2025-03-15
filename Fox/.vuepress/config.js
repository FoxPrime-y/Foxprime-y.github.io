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
             { text: '算法练习题', link: '/suanfa/' },
           ],
           sidebar:{
             '/suanfa/':[
                  '',
                  'B2008.md', 
                  'B2016.md',
                  'LeetCode02.05.md',
                  'LeetCode128.md',
                  'LeetCode144.md',
                  'LeetCode148.md',
                  'LeetCode1855.md',
                  'LeetCode1980.md',
                  'LeetCode1981.md',
                  'LeetCode2007.md',
                  'LeetCode2023.md',
                  'LeetCode2749.md',
                  'P1010.md',
                  'P1026.md',
                  'P1036.md',
                  'P1125.md',
                  'P1138.md',
                  'P1163.md',
                  'P1179.md',
                  'P1781.md',
                  'P1308.md',
                  'P1781.md',
                  'P1789.md',
                  'P1881.md',
                  'P2002.md',
                  'P2241.md',
                  'P3392.md',
                  'P7786.md',
                  'Q1.md',
                  'Q2.md',
                  'Q3.md',
                  'ShiftA.md'
             ]
           }
  }),
})