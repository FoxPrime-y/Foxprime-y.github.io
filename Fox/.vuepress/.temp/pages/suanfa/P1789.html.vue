<template><div><h1 id="p1789" tabindex="-1"><a class="header-anchor" href="#p1789"><span>P1789</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p1789 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        int n = sc.nextInt();</span>
<span class="line">        int m = sc.nextInt();</span>
<span class="line">        int k = sc.nextInt();</span>
<span class="line">        boolean[][] light = new boolean[n][n];</span>
<span class="line">        // 火把位置</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            int x = sc.nextInt() - 1; // 转为 0-indexed</span>
<span class="line">            int y = sc.nextInt() - 1;</span>
<span class="line">            // 照亮火把周围的区域</span>
<span class="line">            for (int dx = -2; dx &lt;= 2; dx++) {</span>
<span class="line">                for (int dy = -2; dy &lt;= 2; dy++) {</span>
<span class="line">                    if (Math.abs(dx) + Math.abs(dy) &lt;= 2) {</span>
<span class="line">                        int nx = x + dx;</span>
<span class="line">                        int ny = y + dy;</span>
<span class="line">                        if (nx >= 0 &amp;&amp; nx &lt; n &amp;&amp; ny >= 0 &amp;&amp; ny &lt; n) {</span>
<span class="line">                            light[nx][ny] = true;</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        // 萤石位置</span>
<span class="line">        for (int i = 0; i &lt; k; i++) {</span>
<span class="line">            int o = sc.nextInt() - 1;</span>
<span class="line">            int p = sc.nextInt() - 1;</span>
<span class="line">            // 照亮萤石周围的区域</span>
<span class="line">            for (int dx = -1; dx &lt;= 1; dx++) {</span>
<span class="line">                for (int dy = -1; dy &lt;= 1; dy++) {</span>
<span class="line">                    int nx = o + dx;</span>
<span class="line">                    int ny = p + dy;</span>
<span class="line">                    if (nx >= 0 &amp;&amp; nx &lt; n &amp;&amp; ny >= 0 &amp;&amp; ny &lt; n) {</span>
<span class="line">                        light[nx][ny] = true;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        // 未被照亮的地方</span>
<span class="line">        int df = 0;</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            for (int j = 0; j &lt; n; j++) {</span>
<span class="line">                if (!light[i][j]) {</span>
<span class="line">                    df++;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(df);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


