<template><div><h1 id="p3392" tabindex="-1"><a class="header-anchor" href="#p3392"><span>P3392</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class p3392 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner sc = new Scanner(System.in);</span>
<span class="line">        int n = sc.nextInt();</span>
<span class="line">        int m = sc.nextInt();</span>
<span class="line">        int[][] arr = new int[n][m];</span>
<span class="line">        //阵列颜色</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            String row = sc.next(); // 读取一行</span>
<span class="line">            for (int j = 0; j &lt; m; j++) {</span>
<span class="line">                if (row.charAt(j) == 'W') {</span>
<span class="line">                    arr[i][j] = 1;</span>
<span class="line">                } else if (row.charAt(j) == 'B') {</span>
<span class="line">                    arr[i][j] = 2;</span>
<span class="line">                } else if (row.charAt(j) == 'R') {</span>
<span class="line">                    arr[i][j] = 3;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        int min = Integer.MAX_VALUE;//最小变动</span>
<span class="line">        //不同区间</span>
<span class="line">        for (int white = 1; white &lt;= n - 2; white++) {</span>
<span class="line">            for (int black = 1; black + white &lt;= n - 1; black++) {</span>
<span class="line">                int changes = 0;</span>
<span class="line">                //计算颜色变化</span>
<span class="line">                for (int i = 0; i &lt; n; i++) {</span>
<span class="line">                    for (int j = 0; j &lt; m; j++) {</span>
<span class="line">                        if (i &lt; white) {</span>
<span class="line">                            if (arr[i][j] != 1) changes++;//白</span>
<span class="line">                        } else if (i &lt; white + black) {</span>
<span class="line">                            if (arr[i][j] != 2) changes++;//蓝</span>
<span class="line">                        } else {</span>
<span class="line">                            if (arr[i][j] != 3) changes++;//红</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">                min = Math.min(min, changes);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println(min);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


